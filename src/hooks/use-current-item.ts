import {atom, useAtom} from 'jotai';
import {useCallback} from 'react';
import {useAudioState} from 'src/components/app/hooks/use-audio-state';
import {type MediaItem} from 'src/dtos';
import {useImageLoader} from 'src/hooks/use-image-loader';
import {useMediaFetch} from 'src/hooks/use-media-fetch';

const currentItemAtom = atom<MediaItem | null>(null);

export function useCurrentItem() {
  const [currentItem, setCurrentItem] = useAtom(currentItemAtom);
  const {updateSource} = useAudioState();
  const {blobUrl} = useImageLoader(currentItem?.url ?? null);
  const {fetchMedia, isLoading} = useMediaFetch();

  const updateCurrentItem = useCallback(
    async (newItem: MediaItem) => {
      if (newItem === currentItem || isLoading) {
        return;
      }

      const audio = await fetchMedia(newItem.url, 'audio');
      updateSource(audio);
      setCurrentItem(newItem);
    },
    [currentItem, updateSource, fetchMedia, setCurrentItem, isLoading],
  );

  return {
    currentItem,
    updateCurrentItem,
    imageUrl: blobUrl,
    isLoading,
  };
}
