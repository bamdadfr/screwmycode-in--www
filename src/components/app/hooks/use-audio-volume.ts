import {useAtom, useAtomValue} from 'jotai';
import {useEffect} from 'react';
import {
  audioDomReferenceAtom,
  audioVolumeAtom,
} from 'src/components/app/hooks/audio-atoms';

export function useAudioVolume() {
  const [volume, setVolume] = useAtom(audioVolumeAtom);
  const ref = useAtomValue(audioDomReferenceAtom);

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
