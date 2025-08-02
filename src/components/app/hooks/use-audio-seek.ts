import {useAtom, useAtomValue} from 'jotai';
import {useEffect} from 'react';
import {
  audioDomReferenceAtom,
  audioSeekAtom,
} from 'src/components/app/hooks/audio-atoms';

export function useAudioSeek() {
  const ref = useAtomValue(audioDomReferenceAtom);
  const [seek, setSeek] = useAtom(audioSeekAtom);

  useEffect(() => {
    if (ref === null || seek === null) {
      return;
    }

    ref.currentTime = seek;
    setSeek(seek);
  }, [ref, seek, setSeek]);
}
