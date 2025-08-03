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
  const {blobUrl} = useImageLoader(currentMedia ?? null);
  const {token} = useToken();
  const setCurrentIsLoading = useSetAtom(currentIsLoadingAtom);

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

  const update = useCallback(
    async (newMedia: MediaDto) => {
      if (newMedia.url === currentMedia?.url || token === null) {
        return;
      }

      setCurrentMedia(newMedia);
      setCurrentIsLoading(true);

      // check availability
      const response = await fetch(newMedia.audio, {
        method: 'HEAD',
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      // refresh if necessary
      if (!response.ok) {
        const refreshedMedia = await createMedia(token, newMedia.url);
        newMedia.hits = refreshedMedia.hits;
        newMedia.audio = refreshedMedia.audio;
        newMedia.image = refreshedMedia.image;
      }

      // update UI
      updateSource(newMedia.audio);
      setCurrentMedia(newMedia);
      setCurrentIsLoading(false);
    },
    [currentMedia, updateSource, setCurrentMedia, token, setCurrentIsLoading],
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
