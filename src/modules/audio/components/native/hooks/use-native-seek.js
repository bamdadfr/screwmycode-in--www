import { useEffect } from 'react';
import { useAtom } from 'jotai';
import { seekAtom } from '../../../../../atoms/seek.atoms';

/**
 * Hook to set the native player's current time
 *
 * @param {HTMLAudioElement} audio - The native audio element
 */
export function useNativeSeek (audio) {
  const [seek] = useAtom (seekAtom);

  useEffect (() => {
    if (!(audio instanceof HTMLAudioElement)) {
      return;
    }

    audio.currentTime = seek;
  }, [audio, seek]);
}
