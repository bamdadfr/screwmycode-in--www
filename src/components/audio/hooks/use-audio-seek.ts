import {useEffect} from 'react';
import {usePlayerContext} from 'src/contexts/player-context';

export function useAudioSeek() {
  const {ref, seek} = usePlayerContext();

  useEffect(() => {
    if (ref.current === null) {
      return;
    }

    ref.current.currentTime = seek;
  }, [ref, seek]);
}
