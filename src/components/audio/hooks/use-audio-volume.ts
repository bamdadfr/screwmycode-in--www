import {useEffect} from 'react';
import {useAudioPlayerContext} from 'src/contexts/audio-player-context';
import {useAudioRefContext} from 'src/contexts/audio-ref-context';

export function useAudioVolume() {
  const ref = useAudioRefContext();
  const {volume, setVolume} = useAudioPlayerContext();

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
