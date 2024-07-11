import {useAtom} from 'jotai';
import {useEffect} from 'react';
import {isPlayingAtom} from 'src/atoms/play-pause.atoms';

/**
 * Hook to use audio play/pause
 */
export function useAudioPlayPause(audio: HTMLAudioElement | null): void {
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
