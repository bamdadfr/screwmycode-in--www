import {useEffect} from 'react';
import {useAudioPlayerContext} from 'src/contexts/audio-player-context';
import {useAudioRefContext} from 'src/contexts/audio-ref-context';

export function useAudioSeek() {
  const ref = useAudioRefContext();
  const {seek} = useAudioPlayerContext();

  useEffect(() => {
    if (ref.current === null) {
      return;
    }

    ref.current.currentTime = seek;
  }, [ref, seek]);
}
