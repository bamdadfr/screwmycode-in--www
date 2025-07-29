import {atom, useAtom} from 'jotai';
import {useCallback} from 'react';
import {type ListItem} from 'src/dtos';
import {useImageLoader} from 'src/hooks/use-image-loader';
import {useMediaFetch} from 'src/hooks/use-media-fetch';

const currentItemAtom = atom<ListItem | null>(null);
const currentAudioUrlAtom = atom<string | null>(null);

export function useCurrentItem() {
  const [currentItem, setCurrentItem] = useAtom(currentItemAtom);
  const [audioUrl, setAudioUrl] = useAtom(currentAudioUrlAtom);
  const {blobUrl} = useImageLoader(currentItem?.url ?? null);
  const {fetchMedia, isLoading} = useMediaFetch();

  const updateCurrentItem = useCallback(
    async (newItem: ListItem) => {
      if (newItem === currentItem || isLoading) {
        return;
      }

      setCurrentItem(newItem);
      const audio = await fetchMedia(newItem.url, 'audio');
      setAudioUrl(audio);
    },
    [currentItem, setAudioUrl, fetchMedia, setCurrentItem, isLoading],
  );

  return {
    currentItem,
    updateCurrentItem,
    imageUrl: blobUrl,
    audioUrl,
    isLoading,
  };
}
