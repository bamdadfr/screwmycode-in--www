import {useAtomValue} from 'jotai';
import {useEffect} from 'react';
import {audioDomReferenceAtom} from 'src/components/app/hooks/audio-atoms';

declare global {
  interface HTMLAudioElement {
    mozPreservesPitch: boolean;
    preservesPitch: boolean;
  }
}

export function useAudioPitch() {
  const ref = useAtomValue(audioDomReferenceAtom);

  useEffect(() => {
    if (ref === null) {
      return;
    }

    ref.mozPreservesPitch = false;
    ref.preservesPitch = false;
  }, [ref]);
}
