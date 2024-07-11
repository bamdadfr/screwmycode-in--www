import {useAtom} from 'jotai';
import {useEffect} from 'react';
import {speedAtom} from 'src/atoms/speed.atoms';

/**
 * Hook to set audio playback rate
 */
export function useAudioPlaybackRate(audio: HTMLAudioElement | null): void {
  const [speed] = useAtom(speedAtom);

  useEffect(() => {
    if (!(audio instanceof HTMLAudioElement)) {
      return;
    }

    audio.playbackRate = speed;
  }, [audio, speed]);
}
