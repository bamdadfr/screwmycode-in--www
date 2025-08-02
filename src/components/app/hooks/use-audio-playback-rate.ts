import {useAtomValue} from 'jotai';
import {useEffect} from 'react';
import {
  audioDomReferenceAtom,
  audioSpeedAtom,
} from 'src/components/app/hooks/audio-atoms';

export function useAudioPlaybackRate() {
  const ref = useAtomValue(audioDomReferenceAtom);
  const speed = useAtomValue(audioSpeedAtom);

  useEffect(() => {
    if (ref === null) {
      return;
    }

    ref.playbackRate = speed;
  }, [ref, speed]);
}
