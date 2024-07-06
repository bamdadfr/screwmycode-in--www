import {useEffect} from 'react';
import {useAtom} from 'jotai';
import {setProgressAtom} from 'src/atoms/progress.atoms';
import {isPlayingAtom} from 'src/atoms/play-pause.atoms';

/**
 * Hook to set the progress of audio element
 */
export function useAudioProgress(audio: HTMLAudioElement | null): void {
  const [isPlaying] = useAtom(isPlayingAtom);
  const [, setProgress] = useAtom(setProgressAtom);
  const fps = 10;

  useEffect(() => {
    let i1: NodeJS.Timeout | undefined = undefined;

    if (!(audio instanceof HTMLAudioElement)) {
      return;
    }

    if (isPlaying) {
      i1 = setInterval(() => {
        setProgress(Math.floor(audio.currentTime));
      }, 1000 / fps);
    }

    return () => clearInterval(i1);
  }, [audio, isPlaying, setProgress]);
}
