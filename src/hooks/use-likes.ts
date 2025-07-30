import {useAtom} from 'jotai';
import {atomWithStorage} from 'jotai/utils';
import {LOCAL_STORAGE_KEY} from 'src/constants';
import {type MediaDto} from 'src/dtos';

const likesAtom = atomWithStorage<MediaDto[]>(LOCAL_STORAGE_KEY.enum.LIKES, []);

export function useLikes() {
  const [likes, setLikes] = useAtom(likesAtom);

  return {
    likes,
    setLikes,
  };
}
