import {useEffect} from 'react';
import {useAudioState} from 'src/components/app/hooks/use-audio-state';

export function useAudioVolume() {
  const {domReference: ref, volume, setVolume} = useAudioState();

  useEffect(() => {
    if (ref === null) {
      return;
    }

    ref.volume = volume;

    const handleVolumeChange = () => setVolume(ref.volume);

    ref.addEventListener('volumechange', handleVolumeChange);

    return () => {
      ref.removeEventListener('volumechange', handleVolumeChange);
    };
  }, [ref, setVolume, volume]);
}
