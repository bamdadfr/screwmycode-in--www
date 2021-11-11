import { useCallback, useEffect, useState } from 'react';
import { useAtom } from 'jotai';
import {
  isPlayingAtom,
  togglePlayingAtom,
} from '../../../../../atoms/play-pause.atoms';
import { isRepeatingAtom } from '../../../../../atoms/repeat.atoms';

/**
 * Hook to use the Howler end event
 *
 * @returns {Function} handleEnd - The handleEnd function
 */
export function useHowlerEnd () {
  const [eventFired, setEventFired] = useState (false);
  const [isRepeating] = useAtom (isRepeatingAtom);
  const [isPlaying] = useAtom (isPlayingAtom);
  const [, togglePlaying] = useAtom (togglePlayingAtom);

  const handleEnd = useCallback (() => {
    setEventFired (true);
  }, []);

  useEffect (() => {
    if (!eventFired) {
      return;
    }

    setEventFired (false);

    if (isRepeating) {
      return;
    }

    if (!isPlaying) {
      return;
    }

    togglePlaying ();
  }, [eventFired, isRepeating, isPlaying, togglePlaying]);

  return handleEnd;
}
