import {useAtomValue, useSetAtom} from 'jotai';
import {useCallback, useEffect, useRef} from 'react';
import {
  audioDurationAtom,
  audioPlayingAtom,
  audioRefAtom,
  audioSrcAtom,
} from 'src/atoms';

export function useAudioLoad() {
  const ref = useAtomValue(audioRefAtom);
  const setDuration = useSetAtom(audioDurationAtom);
  const src = useAtomValue(audioSrcAtom);
  const saved = useRef(src);
  const setPlaying = useSetAtom(audioPlayingAtom);

  const handleCanPlay = useCallback(() => {
    setPlaying(true);
  }, [setPlaying]);

  const handleMetadata = useCallback(() => {
    if (ref === null) {
      return;
    }

    setDuration(ref.duration);
  }, [ref, setDuration]);

  useEffect(() => {
    if (ref === null || src === null || src === saved.current) {
      return;
    }

    ref.src = src;
    saved.current = src;

    ref.oncanplay = handleCanPlay;
    ref.oncanplaythrough = handleCanPlay;
    ref.onloadedmetadata = handleMetadata;

    return () => {
      setPlaying(false);
      saved.current = null;
      ref.oncanplay = null;
      ref.oncanplaythrough = null;
      ref.onloadedmetadata = null;
    };
  }, [ref, handleCanPlay, handleMetadata, setDuration, src, setPlaying]);
}
