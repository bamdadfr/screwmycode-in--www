import {useEffect} from 'react';
import {usePlayerContext} from 'src/contexts/player-context';

export function useAudioVolume() {
  const {ref, volume, setVolume} = usePlayerContext();

  useEffect(() => {
    if (ref.current === null) {
      return;
    }

    const audio = ref.current;

    audio.volume = volume;

    const handleVolumeChange = () => setVolume(audio.volume);

    audio.addEventListener('volumechange', handleVolumeChange);

    return () => {
      audio.removeEventListener('volumechange', handleVolumeChange);
    };
  }, [ref, setVolume, volume]);
}
