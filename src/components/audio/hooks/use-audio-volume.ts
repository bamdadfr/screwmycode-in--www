import {useAtom} from 'jotai';
import {useEffect} from 'react';
import {setVolumeAtom, volumeAtom} from 'src/atoms/volume.atoms';
import {useAudioRefContext} from 'src/contexts/audio-ref-context';

export function useAudioVolume() {
  const ref = useAudioRefContext();
  const [volume] = useAtom(volumeAtom);
  const [, setVolume] = useAtom(setVolumeAtom);

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
