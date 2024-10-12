import {useAtom, useAtomValue} from 'jotai';
import {useEffect} from 'react';
import {audioRefAtom, audioVolumeAtom} from 'src/atoms';

export function useAudioVolume() {
  const ref = useAtomValue(audioRefAtom);
  const [volume, setVolume] = useAtom(audioVolumeAtom);

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
