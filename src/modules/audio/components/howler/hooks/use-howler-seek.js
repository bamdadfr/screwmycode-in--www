import {useEffect} from 'react';
import ReactHowler from 'react-howler';
import {useAtom} from 'jotai';
import {seekAtom} from '../../../../../atoms/seek.atoms';

/**
 * Hook to use the Howler seek method
 *
 * @param {object} howler - Howler instance
 * @returns {number} - Seek position in seconds
 */
export function useHowlerSeek(howler) {
  const [seek] = useAtom(seekAtom);

  useEffect(() => {
    if (!(howler instanceof ReactHowler)) {
      return;
    }

    howler.seek(seek);
  }, [howler, seek]);

  return seek;
}
