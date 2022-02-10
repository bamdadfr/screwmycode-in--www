import {useEffect} from 'react';
import {useAtom} from 'jotai';
import {
  isPlayingAtom,
  setPauseAtom,
  setPlayAtom,
} from '../../../atoms/play-pause.atoms';

/**
 * Hook to toggle play/pause state with keyboard
 */
export function useKeyboardToggle(keyCode = 'Space'): void {
  const [isPlaying] = useAtom(isPlayingAtom);
  const [, setPlay] = useAtom(setPlayAtom);
  const [, setPause] = useAtom(setPauseAtom);

  useEffect(() => {
    const handleKeyboard = (event) => {
      if (event.code === keyCode) {
        if (isPlaying) {
          return setPause();
        }

        setPlay();
      }
    };

    document.addEventListener('keypress', handleKeyboard);
    return () => document.removeEventListener('keypress', handleKeyboard);
  }, [isPlaying, keyCode, setPause, setPlay]);
}
