import {useSetAtom} from 'jotai';
import {useEffect} from 'react';
import {audioIsPlayingAtom} from 'src/components/app/hooks/audio-atoms';

export function useAudioKeyboard(keyCode = 'Space'): void {
  const setIsPlaying = useSetAtom(audioIsPlayingAtom);

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.code === keyCode) {
        setIsPlaying((p) => !p);
      }
    };

    document.addEventListener('keypress', handler);

    return () => {
      document.removeEventListener('keypress', handler);
    };
  }, [keyCode, setIsPlaying]);
}
