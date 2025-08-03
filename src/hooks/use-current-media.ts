import {useQueryClient} from '@tanstack/react-query';
import {atom, useAtom, useSetAtom} from 'jotai';
import {useCallback} from 'react';
import {
  audioIsLoadingAtom,
  audioSourceAtom,
} from 'src/components/app/hooks/audio-atoms';
import {type MediaDto} from 'src/dtos';
import {useImageLoader} from 'src/hooks/use-image-loader';
import {useToken} from 'src/hooks/use-token';
import {createMedia} from 'src/utils';

const currentMediaAtom = atom<MediaDto | null>(null);
export const currentIsLoadingAtom = atom<boolean>(false);

export function useCurrentMedia() {
  const [currentMedia, setCurrentMedia] = useAtom(currentMediaAtom);
  const setSource = useSetAtom(audioSourceAtom);
  const setAudioIsLoading = useSetAtom(audioIsLoadingAtom);
  const {blobUrl} = useImageLoader(currentMedia);
  const {token} = useToken();
  const setCurrentIsLoading = useSetAtom(currentIsLoadingAtom);
  const queryClient = useQueryClient();

  const updateSource = useCallback(
    (newSource: string) => {
      setSource(newSource);
      setAudioIsLoading(true);
    },
    [setSource, setAudioIsLoading],
  );

  const purgeSource = useCallback(() => {
    setSource('');
    setAudioIsLoading(false);
  }, [setSource, setAudioIsLoading]);

  // Check media availability with caching
  const checkMediaAvailability = useCallback(
    async (media: MediaDto) => {
      if (!token) {
        return;
      }

      // Try to get from cache first
      const cached = queryClient.getQueryData<MediaDto>([
        'media',
        media.url,
        token,
      ]);
      if (cached) {
        return cached;
      }

      // Check availability
      const response = await fetch(media.audio, {
        method: 'HEAD',
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      // If not available, refresh
      if (!response.ok) {
        const refreshedMedia = await createMedia(token, media.url);
        // Cache the refreshed media
        queryClient.setQueryData(['media', media.url, token], refreshedMedia);
        return refreshedMedia;
      }

      // Cache the validated media
      queryClient.setQueryData(['media', media.url, token], media);
      return media;
    },
    [token, queryClient],
  );

  const update = useCallback(
    async (newMedia: MediaDto) => {
      if (newMedia.url === currentMedia?.url || token === null) {
        return;
      }

      setCurrentIsLoading(true);

      try {
        // This will use cache if available, otherwise fetch
        const validatedMedia = await checkMediaAvailability(newMedia);
        if (!validatedMedia) {
          throw new Error('Invalid media URL');
        }

        // Update UI
        updateSource(validatedMedia.audio);
        setCurrentMedia(validatedMedia);
      } catch (error) {
        console.error('Failed to update media:', error);
      } finally {
        setCurrentIsLoading(false);
      }
    },
    [
      currentMedia,
      updateSource,
      setCurrentMedia,
      token,
      setCurrentIsLoading,
      checkMediaAvailability,
    ],
  );

  const reset = useCallback(() => {
    setCurrentMedia(null);
    purgeSource();
  }, [setCurrentMedia, purgeSource]);

  return {
    currentMedia,
    imageUrl: blobUrl,
    reset,
    update,
  };
}
