import {useEffect} from 'react';
import {useAudioState} from 'src/components/app/hooks/use-audio-state';

export function useAudioKeyboard(keyCode = 'Space'): void {
  const {toggleIsPlaying} = useAudioState();

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.code === keyCode) {
        toggleIsPlaying();
      }
    };

    document.addEventListener('keypress', handler);

    return () => {
      document.removeEventListener('keypress', handler);
    };
  }, [keyCode, toggleIsPlaying]);
}
