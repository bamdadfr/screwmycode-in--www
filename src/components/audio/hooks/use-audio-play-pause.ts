import {useEffect} from 'react';
import {usePlayerContext} from 'src/contexts/player-context';

export function useAudioPlayPause() {
  const {ref, isPlaying} = usePlayerContext();

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
