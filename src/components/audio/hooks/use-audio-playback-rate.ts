import {useEffect} from 'react';
import {usePlayerContext} from 'src/contexts/player-context';

export function useAudioPlaybackRate() {
  const {ref, speed} = usePlayerContext();

  useEffect(() => {
    if (ref.current === null) {
      return;
    }

    ref.current.playbackRate = speed;
  }, [ref, speed]);
}
