import {useAtom, useAtomValue} from 'jotai';
import {useEffect} from 'react';
import {audioBufferAtom, audioProgressAtom, audioRefAtom} from 'src/atoms';

const getBufferedAmount = (audio: HTMLAudioElement) => {
  return audio.buffered.end(audio.buffered.length - 1);
};

let t: null | NodeJS.Timeout = null;

export function useAudioBuffer() {
  const ref = useAtomValue(audioRefAtom);
  const [buffer, setBuffer] = useAtom(audioBufferAtom);
  const progress = useAtomValue(audioProgressAtom);

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

      t = setTimeout(() => {
        const amount = getBufferedAmount(ref);
        setBuffer(amount);
      }, 1000);
    };

    ref.addEventListener('canplaythrough', handle);
    ref.addEventListener('progress', handle);

    return () => {
      ref.removeEventListener('canplaythrough', handle);
      ref.removeEventListener('progress', handle);
    };
  }, [ref, setBuffer]);
}
