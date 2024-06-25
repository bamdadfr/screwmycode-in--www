import {useEffect} from 'react';
import {useAtom} from 'jotai';
import {setVolumeAtom, volumeAtom} from '../../../atoms/volume.atoms';

/**
 * Hook to set audio volume
 * @param audio
 */
export function useAudioVolume(audio: HTMLAudioElement): void {
  const [volume] = useAtom(volumeAtom);
  const [, setVolume] = useAtom(setVolumeAtom);

  useEffect(() => {
    if (!(audio instanceof HTMLAudioElement)) {
      return;
    }

    audio.volume = volume;

    const handleVolumeChange = () => setVolume(audio.volume);

    audio.addEventListener('volumechange', handleVolumeChange);

    return () => audio.removeEventListener('volumechange', handleVolumeChange);
  }, [audio, setVolume, volume]);
}
