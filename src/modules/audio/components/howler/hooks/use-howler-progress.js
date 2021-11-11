import { useEffect } from 'react';
import { useAtom } from 'jotai';
import { setProgressAtom } from '../../../../../atoms/progress.atoms';
import { isPlayingAtom } from '../../../../../atoms/play-pause.atoms';

/**
 * Hook to set the progress of the Howler audio
 *
 * @param {object} howler - Howler instance
 */
export function useHowlerProgress (howler) {
  const [isPlaying] = useAtom (isPlayingAtom);
  const [, setProgress] = useAtom (setProgressAtom);
  const fps = 10;

  useEffect (() => {
    let i1 = undefined;

    if (howler !== null && isPlaying) {
      i1 = setInterval (() => {
        setProgress (Math.floor (howler.seek ()));
      }, 1000 / fps);

      return () => clearInterval (i1);
    }
  }, [howler, isPlaying, setProgress]);
}
