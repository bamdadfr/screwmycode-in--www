import {useEffect} from 'react';
import {useAudioPlayerContext} from 'src/contexts/audio-player-context';
import {useAudioRefContext} from 'src/contexts/audio-ref-context';

export function useAudioPlaybackRate() {
  const ref = useAudioRefContext();
  const {speed} = useAudioPlayerContext();

  useEffect(() => {
    if (ref.current === null) {
      return;
    }

    ref.current.playbackRate = speed;
  }, [ref, speed]);
}
