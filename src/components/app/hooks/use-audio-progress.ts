import {useEffect} from 'react';
import {useAudioBuffer} from 'src/components/app/hooks/use-audio-buffer';
import {useAudioState} from 'src/components/app/hooks/use-audio-state';

const fps = 4;

export function useAudioProgress() {
  const {domReference: ref, setProgress, isPlaying} = useAudioState();
  const {update: updateBuffer} = useAudioBuffer();

  useEffect(() => {
    let i1: NodeJS.Timeout | undefined = undefined;

    if (ref === null) {
      return;
    }

    if (isPlaying) {
      i1 = setInterval(() => {
        setProgress(Math.floor(ref.currentTime));
        updateBuffer();
      }, 1000 / fps);
    }

    return () => {
      clearInterval(i1);
    };
  }, [ref, isPlaying, setProgress, updateBuffer]);
}
