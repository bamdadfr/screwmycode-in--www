import { useEffect } from 'react';
import ReactHowler from 'react-howler';
import { useAtom } from 'jotai';
import { volumeAtom } from '../../../../../atoms/volume.atoms';

/**
 * Hook to set the volume of the Howler instance
 *
 * @param {object} howler - Howler instance
 * @returns {number} - Volume
 */
export function useHowlerVolume (howler) {
  const [volume] = useAtom (volumeAtom);

  useEffect (() => {
    if (!(howler instanceof ReactHowler)) {
      return;
    }

    howler.volume (volume);
  }, [howler, volume]);

  return volume;
}
