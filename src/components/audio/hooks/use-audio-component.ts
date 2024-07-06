import {RefObject, useRef} from 'react';
import {useRouter} from 'next/router';
import {useAtom} from 'jotai';
import {useNextReplaceUrl} from 'next-replace-url';
import {useCache} from 'src/hooks/use-cache';
import {speedAtom} from 'src/atoms/speed.atoms';
import {audioTitleAtom} from 'src/atoms/audio-title.atoms';
import {getProviderFromRouter} from 'src/utils/get-provider/get-provider-from-router';
import {useKeyboardToggle} from './use-keyboard-toggle';
import {useAudioLoad} from './use-audio-load';
import {useAudioLoop} from './use-audio-loop';
import {useAudioPitch} from './use-audio-pitch';
import {useAudioPlaybackRate} from './use-audio-playback-rate';
import {useAudioVolume} from './use-audio-volume';
import {useAudioPlayPause} from './use-audio-play-pause';
import {useAudioProgress} from './use-audio-progress';
import {useAudioSeek} from './use-audio-seek';
import {useAudioBuffered} from './use-audio-buffered';

interface UseAudioComponent {
  ref: RefObject<HTMLAudioElement>;
}

/**
 * Entry hook for the audio module
 */
export function useAudioModule(url: string): UseAudioComponent {
  const router = useRouter();
  const [speed] = useAtom(speedAtom);
  const [audioTitle] = useAtom(audioTitleAtom);
  const cachedSpeed = useCache(speed, 350);

  useKeyboardToggle('Space');

  useNextReplaceUrl('speed', cachedSpeed.toString());

  if (audioTitle) {
    document.title = `${audioTitle} - ${cachedSpeed} - ${getProviderFromRouter(router)}`;
  }

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

  return {ref};
}
