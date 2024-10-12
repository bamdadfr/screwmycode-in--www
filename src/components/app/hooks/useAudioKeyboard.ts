import {useSetAtom} from 'jotai';
import {useEffect} from 'react';
import {audioToggleAtom} from 'src/atoms';

export function useAudioKeyboard(keyCode = 'Space'): void {
  const toggle = useSetAtom(audioToggleAtom);

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.code === keyCode) {
        toggle();
      }
    };

    document.addEventListener('keypress', handler);

    return () => {
      document.removeEventListener('keypress', handler);
    };
  }, [keyCode, toggle]);
}
