import {useEffect} from 'react';

declare global {
  interface HTMLAudioElement {
    mozPreservesPitch: boolean;
    preservesPitch: boolean;
  }
}

/**
 * Hook to set the pitch of the audio element
 */
export function useAudioPitch(audio: HTMLAudioElement | null): void {
  useEffect(() => {
    if (!(audio instanceof HTMLAudioElement)) {
      return;
    }

    audio.mozPreservesPitch = false;
    audio.preservesPitch = false;
  }, [audio]);
}
