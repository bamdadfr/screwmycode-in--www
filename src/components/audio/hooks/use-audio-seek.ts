import {useEffect} from 'react';
import {useAtom} from 'jotai';
import {seekAtom} from 'src/atoms/seek.atoms';

/**
 * Hook to set audio player's current time
 */
export function useAudioSeek(audio: HTMLAudioElement | null): void {
  const [seek] = useAtom(seekAtom);

  useEffect(() => {
    if (!(audio instanceof HTMLAudioElement)) {
      return;
    }

    audio.currentTime = seek;
  }, [audio, seek]);
}
