import {useEffect} from 'react';
import {useAudioState} from 'src/components/app/hooks/use-audio-state';

export function useAudioPlaybackRate() {
  const {domReference: ref, speed} = useAudioState();

  useEffect(() => {
    if (ref === null) {
      return;
    }

    ref.playbackRate = speed;
  }, [ref, speed]);
}
