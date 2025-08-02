import {useAtomValue, useSetAtom} from 'jotai';
import {useEffect} from 'react';
import {
  audioDomReferenceAtom,
  audioIsPlayingAtom,
  audioProgressAtom,
} from 'src/components/app/hooks/audio-atoms';
import {useAudioBuffer} from 'src/components/app/hooks/use-audio-buffer';

const fps = 4;

export function useAudioProgress() {
  const ref = useAtomValue(audioDomReferenceAtom);
  const isPlaying = useAtomValue(audioIsPlayingAtom);
  const setProgress = useSetAtom(audioProgressAtom);
  const {update: updateBuffer} = useAudioBuffer();

  useEffect(() => {
    let i1: NodeJS.Timeout | undefined = undefined;

    if (ref === null) {
      return;
    }

    if (isPlaying) {
      i1 = setInterval(() => {
        setProgress(Math.floor(ref.currentTime));
        updateBuffer();
      }, 1000 / fps);
    }

    return () => {
      clearInterval(i1);
    };
  }, [ref, isPlaying, setProgress, updateBuffer]);
}
