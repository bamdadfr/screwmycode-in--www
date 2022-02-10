import {useEffect} from 'react';
import {useAtom} from 'jotai';
import {isPlayingAtom} from '../../../../../atoms/play-pause.atoms';

/**
 * Hook to use native play/pause
 */
export function useNativePlayPause(audio: HTMLAudioElement): void {
  const [isPlaying] = useAtom(isPlayingAtom);

  useEffect(() => {
    if (!(audio instanceof HTMLAudioElement)) {
      return;
    }

    (async () => {
      if (isPlaying) {
        await audio.play();
        return;
      }

      audio.pause();
    })();
  }, [isPlaying, audio]);
}
