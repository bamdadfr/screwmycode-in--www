import {useEffect} from 'react';
import ReactHowler from 'react-howler';
import {useAtom} from 'jotai';
import {volumeAtom} from '../../../../../atoms/volume.atoms';

/**
 * Hook to set the volume of the Howler instance
 */
export function useHowlerVolume(howler: ReactHowler): number {
  const [volume] = useAtom(volumeAtom);

  useEffect(() => {
    if (!(howler instanceof ReactHowler)) {
      return;
    }

    howler.volume(volume);
  }, [howler, volume]);

  return volume;
}
