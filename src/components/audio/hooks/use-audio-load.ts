import {useAtom} from 'jotai';
import {useCallback, useEffect, useState} from 'react';
import {setDurationAtom} from 'src/atoms/duration.atoms';
import {setLoadedAtom} from 'src/atoms/load.atoms';
import {useAudioRefContext} from 'src/contexts/audio-ref-context';

export function useAudioLoad(url: string) {
  const ref = useAudioRefContext();
  const [savedUrl, setSavedUrl] = useState<string>();
  const [, setLoaded] = useAtom(setLoadedAtom);
  const [, setDuration] = useAtom(setDurationAtom);

  const handleCanPlay = useCallback(() => {
    setLoaded(true);
  }, [setLoaded]);

  const handleMetadata = useCallback(() => {
    if (ref.current === null) {
      return;
    }

    setDuration(ref.current.duration);
  }, [ref, setDuration]);

  useEffect(() => {
    if (ref.current === null) {
      return;
    }

    const audio = ref.current;

    if (url === savedUrl) {
      return;
    }

    audio.src = url;
    setSavedUrl(url);

    audio.addEventListener('canplay', () => handleCanPlay());
    audio.addEventListener('loadedmetadata', () => handleMetadata());

    return () => {
      audio.removeEventListener('canplay', () => handleCanPlay());
      audio.removeEventListener('loadedmetadata', () => handleMetadata());
    };
  }, [ref, handleCanPlay, handleMetadata, savedUrl, setDuration, url]);
}
