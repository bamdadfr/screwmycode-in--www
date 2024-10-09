import {useEffect} from 'react';
import {usePlayerContext} from 'src/contexts/player-context';

declare global {
  interface HTMLAudioElement {
    mozPreservesPitch: boolean;
    preservesPitch: boolean;
  }
}

export function useAudioPitch() {
  const {ref} = usePlayerContext();

  useEffect(() => {
    if (ref.current === null) {
      return;
    }

    ref.current.mozPreservesPitch = false;
    ref.current.preservesPitch = false;
  }, [ref]);
}
