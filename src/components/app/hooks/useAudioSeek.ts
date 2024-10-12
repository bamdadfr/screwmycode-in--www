import {useAtom, useAtomValue} from 'jotai';
import {useEffect} from 'react';
import {audioRefAtom, audioSeekAtom} from 'src/atoms';

export function useAudioSeek() {
  const ref = useAtomValue(audioRefAtom);
  const [seek, setSeek] = useAtom(audioSeekAtom);

  useEffect(() => {
    if (ref === null || seek === null) {
      return;
    }

    ref.currentTime = seek;
    setSeek(null);
  }, [ref, seek, setSeek]);
}
