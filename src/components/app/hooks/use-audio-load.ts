import {useCallback, useEffect, useRef} from 'react';
import {useAudioState} from 'src/components/app/hooks/use-audio-state';
import {useCurrentItem} from 'src/hooks/use-current-item';

export function useAudioLoad() {
  const {domReference: ref, setDuration, setIsPlaying} = useAudioState();
  const {audioUrl} = useCurrentItem();

  const saved = useRef<string | null>(audioUrl);

  const handleCanPlay = useCallback(() => {
    setIsPlaying(true);
  }, [setIsPlaying]);

  const handleMetadata = useCallback(() => {
    if (ref === null) {
      return;
    }

    setDuration(ref.duration);
  }, [ref, setDuration]);

  useEffect(() => {
    if (ref === null || audioUrl === null || audioUrl === saved.current) {
      return;
    }

    // cleanup and close current
    if (saved.current !== null) {
      ref.pause();
      ref.src = '';
      ref.load();
    }

    ref.src = audioUrl;
    saved.current = audioUrl;

    ref.oncanplay = handleCanPlay;
    ref.oncanplaythrough = handleCanPlay;
    ref.onloadedmetadata = handleMetadata;

    return () => {
      setIsPlaying(false);
      saved.current = null;
      ref.oncanplay = null;
      ref.oncanplaythrough = null;
      ref.onloadedmetadata = null;
    };
  }, [ref, audioUrl, handleCanPlay, handleMetadata, setDuration, setIsPlaying]);
}
