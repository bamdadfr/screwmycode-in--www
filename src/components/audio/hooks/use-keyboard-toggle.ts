import {useEffect} from 'react';
import {useAudioPlayerContext} from 'src/contexts/audio-player-context';

export function useKeyboardToggle(keyCode = 'Space'): void {
  const {togglePlaying} = useAudioPlayerContext();

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.code === keyCode) {
        togglePlaying();
      }
    };

    document.addEventListener('keypress', handler);

    return () => {
      document.removeEventListener('keypress', handler);
    };
  }, [keyCode, togglePlaying]);
}
