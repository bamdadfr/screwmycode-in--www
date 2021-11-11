import { useEffect } from 'react';
import { useAtom } from 'jotai';
import { isRepeatingAtom } from '../../../../../atoms/repeat.atoms';

/**
 * Hook to set the native loop on the audio element
 *
 * @param {HTMLAudioElement} audio - The audio element
 */
export function useNativeLoop (audio) {
  const [isRepeating] = useAtom (isRepeatingAtom);

  useEffect (() => {
    if (!(audio instanceof HTMLAudioElement)) {
      return;
    }

    audio.loop = isRepeating;
  }, [audio, isRepeating]);
}
