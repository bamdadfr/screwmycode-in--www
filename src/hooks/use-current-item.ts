import {atom, useAtom} from 'jotai';
import {useCallback} from 'react';
import {type ListItem} from 'src/dtos';
import {useMediaFetch} from 'src/hooks/use-media-fetch';

const currentItemAtom = atom<ListItem | null>(null);
const currentImageUrlAtom = atom<string | null>(null);
const currentAudioUrlAtom = atom<string | null>(null);

export function useCurrentItem() {
  const [currentItem, setCurrentItem] = useAtom(currentItemAtom);
  const [imageUrl, setImageUrl] = useAtom(currentImageUrlAtom);
  const [audioUrl, setAudioUrl] = useAtom(currentAudioUrlAtom);

  const {fetchMedia} = useMediaFetch();

  const updateCurrentItem = useCallback(
    async (newItem: ListItem) => {
      if (newItem === currentItem) {
        return;
      }

      setCurrentItem(newItem);
      const image = await fetchMedia(newItem.url, 'image');
      const audio = await fetchMedia(newItem.url, 'audio');
      setImageUrl(image);
      setAudioUrl(audio);
    },
    [currentItem, setImageUrl, setAudioUrl, fetchMedia, setCurrentItem],
  );

  return {
    currentItem,
    updateCurrentItem,
    imageUrl,
    audioUrl,
  };
}
