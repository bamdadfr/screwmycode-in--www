import {useCallback, useEffect} from 'react';
import {useAudioState} from 'src/components/app/hooks/use-audio-state';

let t: null | NodeJS.Timeout = null;

export function useAudioBuffer() {
  const {domReference: ref, progress, buffer, setBuffer} = useAudioState();

  const update = useCallback(() => {
    if (ref === null) {
      return;
    }

    const length = ref.buffered.length;

    if (length === 0) {
      setBuffer(0);
      return;
    }

    const amount = ref.buffered.end(length - 1);
    setBuffer(amount);
  }, [ref, setBuffer]);

  useEffect(() => {
    if (progress > buffer) {
      setBuffer(progress);
    }
  }, [progress, buffer, setBuffer]);

  useEffect(() => {
    if (ref === null) {
      return;
    }

    const handle = () => {
      if (t) {
        clearTimeout(t);
        t = null;
      }

      t = setTimeout(update, 1000);
    };

    ref.addEventListener('canplaythrough', handle);
    ref.addEventListener('progress', handle);

    return () => {
      ref.removeEventListener('canplaythrough', handle);
      ref.removeEventListener('progress', handle);
    };
  }, [ref, update, setBuffer]);
}
