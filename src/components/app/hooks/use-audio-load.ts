import {useCallback, useEffect, useRef} from 'react';
import {useAudioState} from 'src/components/app/hooks/use-audio-state';

export function useAudioLoad() {
  const {
    domReference: ref,
    setDuration,
    setIsPlaying,
    source,
    setIsLoading,
  } = useAudioState();

  const saved = useRef<string | null>(source);

  const handleCanPlay = useCallback(() => {
    setIsPlaying(true);
    setIsLoading(false);
  }, [setIsPlaying, setIsLoading]);

  const handleMetadata = useCallback(() => {
    if (ref === null) {
      return;
    }

    setDuration(ref.duration);
  }, [ref, setDuration]);

  useEffect(() => {
    if (ref === null || source === null || source === saved.current) {
      return;
    }

    // cleanup and close current
    if (saved.current !== null) {
      ref.pause();
      ref.src = '';
      ref.currentTime = 0;
      ref.load();
    }

    ref.src = source;
    saved.current = source;

    ref.oncanplay = handleCanPlay;
    ref.oncanplaythrough = handleCanPlay;
    ref.onloadedmetadata = handleMetadata;

    return () => {
      setIsPlaying(false);
      setIsLoading(true);
      saved.current = null;
      ref.oncanplay = null;
      ref.oncanplaythrough = null;
      ref.onloadedmetadata = null;
    };
  }, [
    ref,
    source,
    handleCanPlay,
    handleMetadata,
    setDuration,
    setIsPlaying,
    setIsLoading,
  ]);
}
