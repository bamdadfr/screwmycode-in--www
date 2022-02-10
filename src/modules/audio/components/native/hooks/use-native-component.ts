import {RefObject, useRef} from 'react';
import {useNativePlaybackRate} from './use-native-playback-rate';
import {useNativeLoop} from './use-native-loop';
import {useNativePitch} from './use-native-pitch';
import {useNativeVolume} from './use-native-volume';
import {useNativeLoad} from './use-native-load';
import {useNativePlayPause} from './use-native-play-pause';
import {useNativeProgress} from './use-native-progress';
import {useNativeSeek} from './use-native-seek';

interface UseNativeComponent {
  ref: RefObject<HTMLAudioElement>;
}

/**
 * Hook to use native audio component
 */
export function useNativeComponent(url: string): UseNativeComponent {
  const ref = useRef(null);

  useNativeLoad(ref.current, url);
  useNativeLoop(ref.current);
  useNativePitch(ref.current);
  useNativePlaybackRate(ref.current);
  useNativeVolume(ref.current);
  useNativePlayPause(ref.current);
  useNativeProgress(ref.current);
  useNativeSeek(ref.current);

  return {ref};
}
