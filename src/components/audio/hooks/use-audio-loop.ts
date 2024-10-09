import {useEffect} from 'react';
import {usePlayerContext} from 'src/contexts/player-context';

export function useAudioLoop() {
  const {ref, isRepeating} = usePlayerContext();

  useEffect(() => {
    if (ref.current === null) {
      return;
    }

    ref.current.loop = isRepeating;
  }, [ref, isRepeating]);
}
