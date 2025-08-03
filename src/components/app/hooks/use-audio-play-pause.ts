import {useAtom, useAtomValue} from 'jotai';
import {useCallback, useEffect} from 'react';
import {
  audioDomReferenceAtom,
  audioIsPlayingAtom,
  audioSpeedAtom,
} from 'src/components/app/hooks/audio-atoms';

export function useAudioPlayPause() {
  const [isPlaying, setIsPlaying] = useAtom(audioIsPlayingAtom);
  const ref = useAtomValue(audioDomReferenceAtom);
  const speed = useAtomValue(audioSpeedAtom);

  const pause = useCallback(() => {
    setIsPlaying(false);
  }, [setIsPlaying]);

  useEffect(() => {
    if (ref === null) {
      return;
    }

    if (!navigator.userActivation.hasBeenActive) {
      pause();
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
  }, [ref, isPlaying, speed, pause]);
}
