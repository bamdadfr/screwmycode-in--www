import { useEffect } from 'react';

/**
 * Hook to set the native pitch of the audio element
 *
 * @param {HTMLAudioElement} audio - The audio element
 */
export function useNativePitch (audio) {
  useEffect (() => {
    if (!(audio instanceof HTMLAudioElement)) {
      return;
    }

    // noinspection JSUndefinedPropertyAssignment
    audio.mozPreservesPitch = false;
  }, [audio]);
}
