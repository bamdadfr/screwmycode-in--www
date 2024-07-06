import {useEffect} from 'react';
import {useAtom} from 'jotai';
import {isRepeatingAtom} from 'src/atoms/repeat.atoms';

/**
 * Hook to set the loop on audio element
 */
export function useAudioLoop(audio: HTMLAudioElement | null): void {
  const [isRepeating] = useAtom(isRepeatingAtom);

  useEffect(() => {
    if (!(audio instanceof HTMLAudioElement)) {
      return;
    }

    audio.loop = isRepeating;
  }, [audio, isRepeating]);
}
