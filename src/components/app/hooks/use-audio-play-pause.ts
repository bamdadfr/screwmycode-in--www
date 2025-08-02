import {useAtomValue} from 'jotai';
import {useEffect} from 'react';
import {
  audioDomReferenceAtom,
  audioIsPlayingAtom,
  audioSpeedAtom,
} from 'src/components/app/hooks/audio-atoms';

export function useAudioPlayPause() {
  const isPlaying = useAtomValue(audioIsPlayingAtom);
  const ref = useAtomValue(audioDomReferenceAtom);
  const speed = useAtomValue(audioSpeedAtom);

  useEffect(() => {
    if (ref === null) {
      return;
    }

    const toggle = async () => {
      if (isPlaying) {
        await ref.play();
        ref.playbackRate = speed;
        return;
      }

      ref.pause();
    };

    toggle().then();
  }, [ref, isPlaying, speed]);
}
