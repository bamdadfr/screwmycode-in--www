import {useAtom} from 'jotai';
import {useEffect} from 'react';
import {setBufferedAtom} from 'src/atoms/buffered.atoms';

const getBufferedAmount = (audio: HTMLAudioElement) => {
  try {
    return audio.buffered.end(audio.buffered.length - 1);
  } catch {
    return 0;
  }
};

export function useAudioBuffered(audio: HTMLAudioElement): void {
  const [, setBuffered] = useAtom(setBufferedAtom);

  useEffect(() => {
    if (!audio) {
      return;
    }

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
  }, [audio, setBuffered]);
}
