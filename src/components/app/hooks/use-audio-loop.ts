import {useAtomValue} from 'jotai';
import {useEffect} from 'react';
import {
  audioDomReferenceAtom,
  audioIsRepeatAtom,
} from 'src/components/app/hooks/audio-atoms';

export function useAudioLoop() {
  const ref = useAtomValue(audioDomReferenceAtom);
  const isRepeat = useAtomValue(audioIsRepeatAtom);

  useEffect(() => {
    if (ref === null) {
      return;
    }

    ref.loop = isRepeat;
  }, [ref, isRepeat]);
}
