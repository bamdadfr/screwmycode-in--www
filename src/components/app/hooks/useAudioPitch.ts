import {useAtomValue} from 'jotai';
import {useEffect} from 'react';
import {audioRefAtom} from 'src/atoms';

declare global {
  interface HTMLAudioElement {
    mozPreservesPitch: boolean;
    preservesPitch: boolean;
  }
}

export function useAudioPitch() {
  const ref = useAtomValue(audioRefAtom);

  useEffect(() => {
    if (ref === null) {
      return;
    }

    ref.mozPreservesPitch = false;
    ref.preservesPitch = false;
  }, [ref]);
}
