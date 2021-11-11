import { useEffect } from 'react';
import ReactHowler from 'react-howler';
import { useAtom } from 'jotai';
import { setDurationAtom } from '../../../../../atoms/duration.atoms';

/**
 * Hook to set the duration of the Howler audio
 *
 * @param {object} howler - The Howler object
 * @returns {number} - The duration of the audio
 */
export function useHowlerDuration (howler) {
  const howlerDuration = Math.floor (howler?.duration ()) || 0;
  const [, setDuration] = useAtom (setDurationAtom);

  useEffect (() => {
    if (!(howler instanceof ReactHowler)) {
      return;
    }
    setDuration (howlerDuration);
  }, [howlerDuration, howler, setDuration]);

  return howlerDuration;
}
