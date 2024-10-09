import {useCallback, useEffect, useState} from 'react';
import {useAudioPlayerContext} from 'src/contexts/audio-player-context';
import {useAudioRefContext} from 'src/contexts/audio-ref-context';
import {useAudioUrlContext} from 'src/contexts/audio-url-context';

export function useAudioLoad() {
  const ref = useAudioRefContext();
  const {url} = useAudioUrlContext();
  const {setDuration, setReady} = useAudioPlayerContext();
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
    audio.onloadedmetadata = handleMetadata;

    // todo: fix me
    // return () => {
    //   audio.oncanplay = null;
    //   audio.onloadedmetadata = null;
    // };
  }, [ref, handleCanPlay, handleMetadata, savedUrl, setDuration, url]);
}
