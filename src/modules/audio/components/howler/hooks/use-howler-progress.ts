import {useEffect} from 'react';
import ReactHowler from 'react-howler';
import {useAtom} from 'jotai';
import {setProgressAtom} from '../../../../../atoms/progress.atoms';
import {isPlayingAtom} from '../../../../../atoms/play-pause.atoms';

/**
 * Hook to set the progress of the Howler audio
 */
export function useHowlerProgress(howler: ReactHowler): void {
  const [isPlaying] = useAtom(isPlayingAtom);
  const [, setProgress] = useAtom(setProgressAtom);
  const fps = 10;

  useEffect(() => {
    let i1 = undefined;

    if (howler !== null && isPlaying) {
      i1 = setInterval(() => {
        setProgress(Math.floor(howler.seek()));
      }, 1000 / fps);

      return () => clearInterval(i1);
    }
  }, [howler, isPlaying, setProgress]);
}
