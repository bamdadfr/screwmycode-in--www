import {useAtom} from 'jotai';
import {useEffect} from 'react';
import {isPlayingAtom} from 'src/atoms/play-pause.atoms';
import {useAudioRefContext} from 'src/contexts/audio-ref-context';

export function useAudioPlayPause() {
  const ref = useAudioRefContext();
  const [isPlaying] = useAtom(isPlayingAtom);

  useEffect(() => {
    if (ref.current === null) {
      return;
    }

    const audio = ref.current;

    const toggle = async () => {
      if (isPlaying) {
        await audio.play();
        return;
      }

      audio.pause();
    };

    toggle().then();
  }, [ref, isPlaying]);
}
