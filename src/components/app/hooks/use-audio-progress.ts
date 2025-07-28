import {useEffect} from 'react';
import {useAudioState} from 'src/components/app/hooks/use-audio-state';

const fps = 10;

export function useAudioProgress() {
  const {domReference: ref, setProgress, isPlaying} = useAudioState();

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
