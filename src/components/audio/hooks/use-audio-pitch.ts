import {useEffect} from 'react';
import {useAudioRefContext} from 'src/contexts/audio-ref-context';

declare global {
  interface HTMLAudioElement {
    mozPreservesPitch: boolean;
    preservesPitch: boolean;
  }
}

export function useAudioPitch() {
  const ref = useAudioRefContext();

  useEffect(() => {
    if (ref.current === null) {
      return;
    }

    ref.current.mozPreservesPitch = false;
    ref.current.preservesPitch = false;
  }, [ref]);
}
