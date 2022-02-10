import {useEffect} from 'react';
import {useAtom} from 'jotai';
import {setProgressAtom} from '../../../../../atoms/progress.atoms';
import {isPlayingAtom} from '../../../../../atoms/play-pause.atoms';

/**
 * Hook to set the progress of the native audio element
 */
export function useNativeProgress(audio: HTMLAudioElement): void {
  const [isPlaying] = useAtom(isPlayingAtom);
  const [, setProgress] = useAtom(setProgressAtom);
  const fps = 10;

  useEffect(() => {
    let i1 = undefined;

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
