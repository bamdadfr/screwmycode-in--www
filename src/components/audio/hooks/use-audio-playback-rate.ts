import {useAtom} from 'jotai';
import {useEffect} from 'react';
import {speedAtom} from 'src/atoms/speed.atoms';
import {useAudioRefContext} from 'src/contexts/audio-ref-context';

export function useAudioPlaybackRate() {
  const ref = useAudioRefContext();
  const [speed] = useAtom(speedAtom);

  useEffect(() => {
    if (ref.current === null) {
      return;
    }

    ref.current.playbackRate = speed;
  }, [ref, speed]);
}
