import {useEffect} from 'react';
import {useAudioState} from 'src/components/app/hooks/use-audio-state';

export function useAudioLoop() {
  const {domReference: ref, isRepeat} = useAudioState();

  useEffect(() => {
    if (ref === null) {
      return;
    }

    ref.loop = isRepeat;
  }, [ref, isRepeat]);
}
