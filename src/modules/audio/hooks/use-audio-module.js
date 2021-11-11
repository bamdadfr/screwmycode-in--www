import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { useAtom } from 'jotai';
import { replaceNextRoute } from '../utils/replace-next-route';
import { useCache } from './use-cache';
import { useKeyboardToggle } from './use-keyboard-toggle';
import { speedAtom } from '../../../atoms/speed.atoms';
import { audioTitleAtom } from '../../../atoms/audio-title.atoms';
import { getProvider } from '../../../utils/get-provider/get-provider';

/**
 * Entry hook for the audio module
 */
export function useAudioModule () {
  const router = useRouter ();
  const [speed] = useAtom (speedAtom);
  const [audioTitle] = useAtom (audioTitleAtom);
  const cachedSpeed = useCache (speed, 350);

  useKeyboardToggle ('Space');

  // replace route
  useEffect (() => {
    replaceNextRoute (
      'speed',
      cachedSpeed.toString (),
      audioTitle
        ? `${audioTitle} - ${cachedSpeed} - ${getProvider (router)} - ScrewMyCode.In`
        : undefined,
    );
  }, [audioTitle, cachedSpeed, router]);
}
