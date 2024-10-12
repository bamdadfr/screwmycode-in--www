import {useAtomValue} from 'jotai';
import {useEffect} from 'react';
import {audioRefAtom, audioRepeatingAtom} from 'src/atoms';

export function useAudioLoop() {
  const ref = useAtomValue(audioRefAtom);
  const isRepeating = useAtomValue(audioRepeatingAtom);

  useEffect(() => {
    if (ref === null) {
      return;
    }

    ref.loop = isRepeating;
  }, [ref, isRepeating]);
}
