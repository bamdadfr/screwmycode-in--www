import {atom, useAtom} from 'jotai';
import {type ListItem} from 'src/dtos';
import {useMediaToken} from 'src/hooks/use-media-token';

const currentItemAtom = atom<ListItem | null>(null);

export function useCurrentItem() {
  const [currentItem, setCurrentItem] = useAtom(currentItemAtom);

  const {url: imageUrl} = useMediaToken(currentItem?.url, 'image');

  return {
    currentItem,
    setCurrentItem,
    imageUrl,
  };
}
