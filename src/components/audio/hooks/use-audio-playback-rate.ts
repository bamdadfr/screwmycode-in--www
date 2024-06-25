import {useEffect} from 'react';
import {useAtom} from 'jotai';
import {speedAtom} from '../../../atoms/speed.atoms';

/**
 * Hook to set audio playback rate
 * @param audio
 */
export function useAudioPlaybackRate(audio: HTMLAudioElement): void {
  const [speed] = useAtom(speedAtom);

  useEffect(() => {
    if (!(audio instanceof HTMLAudioElement)) {
      return;
    }

    audio.playbackRate = speed;
  }, [audio, speed]);
}
