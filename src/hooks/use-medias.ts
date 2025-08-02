import {atom, useAtom} from 'jotai';
import {type MediaDto} from 'src/dtos';

const mediasATom = atom<MediaDto[]>([]);

export function useMedias() {
  const [medias, setMedias] = useAtom(mediasATom);

  return {
    medias,
    setMedias,
  };
}
