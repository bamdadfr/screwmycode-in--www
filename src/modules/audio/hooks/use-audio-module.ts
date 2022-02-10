import {useEffect} from 'react';
import {useRouter} from 'next/router';
import {useAtom} from 'jotai';
import {replaceNextRoute} from '../utils/replace-next-route';
import {useCache} from './use-cache';
import {useKeyboardToggle} from './use-keyboard-toggle';
import {speedAtom} from '../../../atoms/speed.atoms';
import {audioTitleAtom} from '../../../atoms/audio-title.atoms';
import {
  getProviderFromRouter,
} from '../../../utils/get-provider/get-provider-from-router';

/**
 * Entry hook for the audio module
 */
export function useAudioModule(): void {
  const router = useRouter();
  const [speed] = useAtom(speedAtom);
  const [audioTitle] = useAtom(audioTitleAtom);
  const cachedSpeed = useCache(speed, 350);

  useKeyboardToggle('Space');

  // replace route
  useEffect(() => {
    replaceNextRoute(
      'speed',
      cachedSpeed.toString(),
      audioTitle
        ? `${audioTitle} - ${cachedSpeed} - ${getProviderFromRouter(router)}`
        : undefined,
    );
  }, [audioTitle, cachedSpeed, router]);
}
