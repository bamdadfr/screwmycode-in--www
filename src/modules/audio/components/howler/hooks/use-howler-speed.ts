import {useEffect} from 'react';
import ReactHowler from 'react-howler';
import {useAtom} from 'jotai';
import {speedAtom} from '../../../../../atoms/speed.atoms';

/**
 * Hook to set the speed (playback rate) of the Howler instance
 */
export function useHowlerSpeed(howler: ReactHowler): number {
  const [speed] = useAtom(speedAtom);

  useEffect(() => {
    if (!(howler instanceof ReactHowler)) {
      return;
    }
    howler.rate(speed);
  }, [howler, speed]);

  return speed;
}
