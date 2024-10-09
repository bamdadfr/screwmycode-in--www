import {useAtom} from 'jotai';
import {useEffect} from 'react';
import {isRepeatingAtom} from 'src/atoms/repeat.atoms';
import {useAudioRefContext} from 'src/contexts/audio-ref-context';

export function useAudioLoop() {
  const ref = useAudioRefContext();
  const [isRepeating] = useAtom(isRepeatingAtom);

  useEffect(() => {
    if (ref.current === null) {
      return;
    }

    ref.current.loop = isRepeating;
  }, [ref, isRepeating]);
}
