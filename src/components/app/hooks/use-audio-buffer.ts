import {useCallback} from 'react';
import {useAudioState} from 'src/components/app/hooks/use-audio-state';

export function useAudioBuffer() {
  const {domReference: ref, buffer, setBuffer} = useAudioState();

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
