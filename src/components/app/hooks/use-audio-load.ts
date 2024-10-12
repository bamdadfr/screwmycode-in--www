import {useCallback, useEffect, useRef} from 'react';
import {useAudioState} from 'src/components/app/hooks/use-audio-state';
import {useCurrentItem} from 'src/hooks/use-current-item';
import {useMediaToken} from 'src/hooks/use-media-token';

export function useAudioLoad() {
  const {domReference: ref, setDuration, setIsPlaying} = useAudioState();
  const {currentItem} = useCurrentItem();
  const {url: audioUrl} = useMediaToken(currentItem?.url, 'audio');

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
