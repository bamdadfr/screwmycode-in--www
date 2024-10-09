import {useEffect} from 'react';
import {useAudioPlayerContext} from 'src/contexts/audio-player-context';
import {useAudioRefContext} from 'src/contexts/audio-ref-context';

export function useAudioPlayPause() {
  const ref = useAudioRefContext();
  const {isPlaying} = useAudioPlayerContext();

  useEffect(() => {
    if (ref.current === null) {
      return;
    }

    const audio = ref.current;

    const toggle = async () => {
      if (isPlaying) {
        await audio.play();
        return;
      }

      audio.pause();
    };

    toggle().then();
  }, [ref, isPlaying]);
}
