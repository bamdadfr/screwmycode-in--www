import {type RefObject, useRef} from 'react';

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
}

export function useAudioModule(url: string): UseAudioComponent {
  useKeyboardToggle('Space');

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
