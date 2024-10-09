import {useEffect} from 'react';
import {useAudioPlayerContext} from 'src/contexts/audio-player-context';
import {useAudioRefContext} from 'src/contexts/audio-ref-context';

export function useAudioProgress() {
  const ref = useAudioRefContext();
  const {isPlaying, setProgress} = useAudioPlayerContext();
  const fps = 10;

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
