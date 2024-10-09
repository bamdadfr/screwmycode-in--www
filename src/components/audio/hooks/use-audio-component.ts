import {useAtom} from 'jotai';
import {useRouter} from 'next/router';
import {useNextReplaceUrl} from 'next-replace-url';
import {type RefObject, useMemo, useRef} from 'react';
import speedToSemitones from 'speed-to-semitones';
import {audioTitleAtom} from 'src/atoms/audio-title.atoms';
import {speedAtom} from 'src/atoms/speed.atoms';
import {TITLE_SEPARATOR} from 'src/constants';
import {useCache} from 'src/hooks/use-cache';
import {getProviderFromRouter} from 'src/utils/get-provider/get-provider-from-router';

import {useAudioBuffered} from './use-audio-buffered';
import {useAudioLoad} from './use-audio-load';
import {useAudioLoop} from './use-audio-loop';
import {useAudioPitch} from './use-audio-pitch';
import {useAudioPlayPause} from './use-audio-play-pause';
import {useAudioPlaybackRate} from './use-audio-playback-rate';
import {useAudioProgress} from './use-audio-progress';
import {useAudioSeek} from './use-audio-seek';
import {useAudioVolume} from './use-audio-volume';
import {useKeyboardToggle} from './use-keyboard-toggle';

interface UseAudioComponent {
  ref: RefObject<HTMLAudioElement>;
  dynamicTitle: string;
}

export function useAudioModule(url: string): UseAudioComponent {
  const router = useRouter();
  const [speed] = useAtom(speedAtom);
  const [audioTitle] = useAtom(audioTitleAtom);
  const cachedSpeed = useCache(speed, 350);

  useKeyboardToggle('Space');

  useNextReplaceUrl('speed', cachedSpeed.toString());

  const ref = useRef<HTMLAudioElement>(null);

  useAudioLoad(ref.current, url);
  useAudioLoop(ref.current);
  useAudioPitch(ref.current);
  useAudioPlaybackRate(ref.current);
  useAudioVolume(ref.current);
  useAudioPlayPause(ref.current);
  useAudioProgress(ref.current);
  useAudioSeek(ref.current);
  useAudioBuffered(ref.current);

  const dynamicTitle = useMemo(() => {
    if (!audioTitle) {
      return '';
    }

    const semitones = `${speedToSemitones(cachedSpeed, 1)} st`;
    const provider = getProviderFromRouter(router);
    return `${audioTitle} ${TITLE_SEPARATOR} ${provider} ${TITLE_SEPARATOR} ${semitones}`;
  }, [audioTitle, cachedSpeed, router]);

  return {ref, dynamicTitle};
}
