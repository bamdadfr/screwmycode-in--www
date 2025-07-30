import {atom, useAtom} from 'jotai';
import {useCallback} from 'react';
import {useAudioState} from 'src/components/app/hooks/use-audio-state';
import {type MediaDto} from 'src/dtos';
import {useImageLoader} from 'src/hooks/use-image-loader';

const currentMediaAtom = atom<MediaDto | null>(null);

export function useCurrentMedia() {
  const [currentMedia, setCurrentMedia] = useAtom(currentMediaAtom);
  const {updateSource} = useAudioState();
  const {blobUrl} = useImageLoader(currentMedia ?? null);
  const isLoading = false;

  const update = useCallback(
    async (newMedia: MediaDto) => {
      if (newMedia === currentMedia) {
        return;
      }

      updateSource(newMedia.audio);
      setCurrentMedia(newMedia);
    },
    [currentMedia, updateSource, setCurrentMedia],
  );

  return {
    currentMedia,
    update,
    imageUrl: blobUrl,
    isLoading,
  };
}
