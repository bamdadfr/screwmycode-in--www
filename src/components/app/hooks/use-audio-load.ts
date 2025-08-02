import {useAtomValue, useSetAtom} from 'jotai';
import {useCallback, useEffect, useRef} from 'react';
import {
  audioDomReferenceAtom,
  audioDurationAtom,
  audioIsErrorAtom,
  audioIsLoadingAtom,
  audioIsPlayingAtom,
  audioSourceAtom,
} from 'src/components/app/hooks/audio-atoms';
import {ERROR_TIMEOUT} from 'src/constants';
import {useCurrentMedia} from 'src/hooks/use-current-media';

export function useAudioLoad() {
  const ref = useAtomValue(audioDomReferenceAtom);
  const setIsPlaying = useSetAtom(audioIsPlayingAtom);
  const setDuration = useSetAtom(audioDurationAtom);
  const setIsLoading = useSetAtom(audioIsLoadingAtom);
  const setIsError = useSetAtom(audioIsErrorAtom);
  const source = useAtomValue(audioSourceAtom);

  const {reset: resetCurrentMedia} = useCurrentMedia();

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

  const handleError = useCallback(() => {
    setIsError(true);

    setTimeout(() => {
      setIsError(false);
      resetCurrentMedia();
    }, ERROR_TIMEOUT);
  }, [setIsError, resetCurrentMedia]);

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

    ref.addEventListener('canplay', handleCanPlay);
    ref.addEventListener('canplaythrough', handleCanPlay);
    ref.addEventListener('loadedmetadata', handleMetadata);
    ref.addEventListener('error', handleError);

    return () => {
      setIsPlaying(false);
      setIsLoading(true);
      saved.current = null;

      ref.removeEventListener('canplay', handleCanPlay);
      ref.removeEventListener('canplaythrough', handleCanPlay);
      ref.removeEventListener('loadedmetadata', handleMetadata);
      ref.removeEventListener('error', handleError);
    };
  }, [
    ref,
    source,
    handleCanPlay,
    handleMetadata,
    handleError,
    setDuration,
    setIsPlaying,
    setIsLoading,
  ]);
}
