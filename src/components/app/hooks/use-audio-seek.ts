import {useEffect} from 'react';
import {useAudioState} from 'src/components/app/hooks/use-audio-state';

export function useAudioSeek() {
  const {domReference: ref, seek, setSeek} = useAudioState();

  useEffect(() => {
    if (ref === null || seek === null) {
      return;
    }

    ref.currentTime = seek;
    setSeek(null);
  }, [ref, seek, setSeek]);
}
