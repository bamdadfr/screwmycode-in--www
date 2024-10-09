import {useEffect} from 'react';
import {usePlayerContext} from 'src/contexts/player-context';

const fps = 10;

export function useAudioProgress() {
  const {ref, isPlaying, setProgress} = usePlayerContext();

  useEffect(() => {
    let i1: NodeJS.Timeout | undefined = undefined;

    if (ref.current === null) {
      return;
    }

    const audio = ref.current;

    if (isPlaying) {
      i1 = setInterval(() => {
        setProgress(Math.floor(audio.currentTime));
      }, 1000 / fps);
    }

    return () => {
      clearInterval(i1);
    };
  }, [ref, isPlaying, setProgress]);
}
