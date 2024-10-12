import {useAtomValue} from 'jotai';
import {useEffect} from 'react';
import {audioRefAtom, audioSpeedAtom} from 'src/atoms';

export function useAudioPlaybackRate() {
  const ref = useAtomValue(audioRefAtom);
  const speed = useAtomValue(audioSpeedAtom);

  useEffect(() => {
    if (ref === null) {
      return;
    }

    ref.playbackRate = speed;
  }, [ref, speed]);
}
