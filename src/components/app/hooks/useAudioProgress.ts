import {useAtomValue, useSetAtom} from 'jotai';
import {useEffect} from 'react';
import {audioPlayingAtom, audioProgressAtom, audioRefAtom} from 'src/atoms';

const fps = 10;

export function useAudioProgress() {
  const ref = useAtomValue(audioRefAtom);
  const isPlaying = useAtomValue(audioPlayingAtom);
  const setProgress = useSetAtom(audioProgressAtom);

  useEffect(() => {
    let i1: NodeJS.Timeout | undefined = undefined;

    if (ref === null) {
      return;
    }

    if (isPlaying) {
      i1 = setInterval(() => {
        setProgress(Math.floor(ref.currentTime));
      }, 1000 / fps);
    }

    return () => {
      clearInterval(i1);
    };
  }, [ref, isPlaying, setProgress]);
}
