import {useAtom, useAtomValue} from 'jotai';
import {useCallback} from 'react';
import {
  audioBufferAtom,
  audioDomReferenceAtom,
} from 'src/components/app/hooks/audio-atoms';

export function useAudioBuffer() {
  const ref = useAtomValue(audioDomReferenceAtom);
  const [buffer, setBuffer] = useAtom(audioBufferAtom);

  const update = useCallback(() => {
    if (ref === null) {
      return;
    }

    const buffered = ref.buffered.end(0);

    if (buffered === buffer) {
      return;
    }

    setBuffer(buffered);
  }, [ref, buffer, setBuffer]);

  return {
    buffer,
    update,
  };
}
