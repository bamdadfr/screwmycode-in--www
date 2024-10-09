import {useEffect} from 'react';
import {useAudioPlayerContext} from 'src/contexts/audio-player-context';
import {useAudioRefContext} from 'src/contexts/audio-ref-context';

const getBufferedAmount = (audio: HTMLAudioElement) => {
  try {
    return audio.buffered.end(audio.buffered.length - 1);
  } catch {
    return 0;
  }
};

export function useAudioBuffered() {
  const ref = useAudioRefContext();
  const {setBuffered} = useAudioPlayerContext();

  useEffect(() => {
    if (ref.current === null) {
      return;
    }

    const audio = ref.current;

    const handleLoad = () => {
      setBuffered(getBufferedAmount(audio));
    };

    const handleProgress = () => {
      setBuffered(getBufferedAmount(audio));
    };

    audio.addEventListener('canplaythrough', handleLoad);
    audio.addEventListener('progress', handleProgress);

    return () => {
      audio.removeEventListener('canplaythrough', handleLoad);
      audio.removeEventListener('progress', handleProgress);
    };
  }, [ref, setBuffered]);
}
