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

export function useAudioModule() {
  useKeyboardToggle('Space');

  useAudioLoad();
  useAudioLoop();
  useAudioPitch();
  useAudioPlaybackRate();
  useAudioVolume();
  useAudioPlayPause();
  useAudioProgress();
  useAudioSeek();
  useAudioBuffered();
}
