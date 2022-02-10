import {useEffect} from 'react';
import {useAtom} from 'jotai';
import {speedAtom} from '../../../../../atoms/speed.atoms';

/**
 * Hook to set the native playback rate
 */
export function useNativePlaybackRate(audio: HTMLAudioElement): void {
  const [speed] = useAtom(speedAtom);

  useEffect(() => {
    if (!(audio instanceof HTMLAudioElement)) {
      return;
    }

    audio.playbackRate = speed;
  }, [audio, speed]);
}
