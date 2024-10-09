import {useCallback, useEffect, useState} from 'react';
import {usePlayerContext} from 'src/contexts/player-context';

export function useAudioLoad() {
  const {ref, setDuration, setReady, url} = usePlayerContext();
  const [savedUrl, setSavedUrl] = useState<string>();

  const handleCanPlay = useCallback(() => {
    setReady(true);
  }, [setReady]);

  const handleMetadata = useCallback(() => {
    if (ref.current === null) {
      return;
    }

    setDuration(ref.current.duration);
  }, [ref, setDuration]);

  useEffect(() => {
    if (ref.current === null || url === null) {
      return;
    }

    const audio = ref.current;

    if (url === savedUrl) {
      return;
    }

    audio.src = url;
    setSavedUrl(url);

    audio.oncanplay = handleCanPlay;
    audio.oncanplaythrough = handleCanPlay;
    audio.onloadedmetadata = handleMetadata;

    // todo: fix me
    // return () => {
    //   audio.oncanplay = null;
    //   audio.onloadedmetadata = null;
    // };
  }, [ref, handleCanPlay, handleMetadata, savedUrl, setDuration, url]);
}
