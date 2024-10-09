import {useEffect} from 'react';
import {useAudioPlayerContext} from 'src/contexts/audio-player-context';
import {useAudioRefContext} from 'src/contexts/audio-ref-context';

export function useAudioLoop() {
  const ref = useAudioRefContext();
  const {isRepeating} = useAudioPlayerContext();

  useEffect(() => {
    if (ref.current === null) {
      return;
    }

    ref.current.loop = isRepeating;
  }, [ref, isRepeating]);
}
