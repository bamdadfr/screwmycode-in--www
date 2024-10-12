import {useEffect} from 'react';
import {useAudioState} from 'src/components/app/hooks/use-audio-state';

declare global {
  interface HTMLAudioElement {
    mozPreservesPitch: boolean;
    preservesPitch: boolean;
  }
}

export function useAudioPitch() {
  const {domReference: ref} = useAudioState();

  useEffect(() => {
    if (ref === null) {
      return;
    }

    ref.mozPreservesPitch = false;
    ref.preservesPitch = false;
  }, [ref]);
}
