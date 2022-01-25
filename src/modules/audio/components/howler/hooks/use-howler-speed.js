import {useEffect} from 'react';
import ReactHowler from 'react-howler';
import {useAtom} from 'jotai';
import {speedAtom} from '../../../../../atoms/speed.atoms';

/**
 * Hook to set the speed of the Howler instance
 *
 * @param {object} howler - Howler instance
 * @returns {number} - Speed / playback rate
 */
export function useHowlerSpeed(howler) {
  const [speed] = useAtom(speedAtom);

  useEffect(() => {
    if (!(howler instanceof ReactHowler)) {
      return;
    }
    howler.rate(speed);
  }, [howler, speed]);

  return speed;
}
