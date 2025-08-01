import {atom, useAtom} from 'jotai';
import {useCallback} from 'react';
import {useAudioState} from 'src/components/app/hooks/use-audio-state';
import {type MediaDto} from 'src/dtos';
import {useImageLoader} from 'src/hooks/use-image-loader';

const currentMediaAtom = atom<MediaDto | null>(null);

export function useCurrentMedia() {
  const [currentMedia, setCurrentMedia] = useAtom(currentMediaAtom);
  const {updateSource, purgeSource} = useAudioState();
  const {blobUrl} = useImageLoader(currentMedia ?? null);

  const update = useCallback(
    async (newMedia: MediaDto) => {
      if (newMedia.url === currentMedia?.url) {
        return;
      }

      updateSource(newMedia.audio);
      setCurrentMedia(newMedia);
    },
    [currentMedia, updateSource, setCurrentMedia],
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
