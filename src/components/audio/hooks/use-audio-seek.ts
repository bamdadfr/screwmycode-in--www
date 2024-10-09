import {useAtom} from 'jotai';
import {useEffect} from 'react';
import {seekAtom} from 'src/atoms/seek.atoms';
import {useAudioRefContext} from 'src/contexts/audio-ref-context';

export function useAudioSeek() {
  const ref = useAudioRefContext();
  const [seek] = useAtom(seekAtom);

  useEffect(() => {
    if (ref.current === null) {
      return;
    }

    ref.current.currentTime = seek;
  }, [ref, seek]);
}
