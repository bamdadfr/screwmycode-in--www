import {useEffect} from 'react';

declare global {
  interface HTMLAudioElement {
    mozPreservesPitch: boolean;
  }
}

/**
 * Hook to set the native pitch of the audio element
 */
export function useNativePitch(audio: HTMLAudioElement): void {
  useEffect(() => {
    if (!(audio instanceof HTMLAudioElement)) {
      return;
    }

    audio.mozPreservesPitch = false;
  }, [audio]);
}
