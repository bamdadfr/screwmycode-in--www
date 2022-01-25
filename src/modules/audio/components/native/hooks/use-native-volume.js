import {useEffect} from 'react';
import {useAtom} from 'jotai';
import {setVolumeAtom, volumeAtom} from '../../../../../atoms/volume.atoms';

/**
 * Hook to set the native volume
 *
 * @param {HTMLAudioElement} audio - The audio element
 */
export function useNativeVolume(audio) {
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
