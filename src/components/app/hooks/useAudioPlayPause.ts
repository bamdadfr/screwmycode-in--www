import {useAtomValue} from 'jotai';
import {useEffect} from 'react';
import {audioPlayingAtom, audioRefAtom, audioSpeedAtom} from 'src/atoms';

export function useAudioPlayPause() {
  const ref = useAtomValue(audioRefAtom);
  const isPlaying = useAtomValue(audioPlayingAtom);
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
