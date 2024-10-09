import {useEffect} from 'react';
import {usePlayerContext} from 'src/contexts/player-context';

export function useKeyboardToggle(keyCode = 'Space'): void {
  const {togglePlaying} = usePlayerContext();

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
