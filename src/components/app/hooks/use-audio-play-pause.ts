import {useEffect} from 'react';
import {useAudioState} from 'src/components/app/hooks/use-audio-state';

export function useAudioPlayPause() {
  const {domReference: ref, isPlaying, speed} = useAudioState();

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
