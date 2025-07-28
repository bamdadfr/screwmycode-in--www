import {useAudioBuffer} from 'src/components/app/hooks/use-audio-buffer';
import {useAudioKeyboard} from 'src/components/app/hooks/use-audio-keyboard';
import {useAudioLoad} from 'src/components/app/hooks/use-audio-load';
import {useAudioLoop} from 'src/components/app/hooks/use-audio-loop';
import {useAudioPitch} from 'src/components/app/hooks/use-audio-pitch';
import {useAudioPlayPause} from 'src/components/app/hooks/use-audio-play-pause';
import {useAudioPlaybackRate} from 'src/components/app/hooks/use-audio-playback-rate';
import {useAudioProgress} from 'src/components/app/hooks/use-audio-progress';
import {useAudioSeek} from 'src/components/app/hooks/use-audio-seek';
import {useAudioVolume} from 'src/components/app/hooks/use-audio-volume';

export function useAudioModule() {
  useAudioKeyboard('Space');
  useAudioLoad();
  useAudioLoop();
  useAudioPitch();
  useAudioPlaybackRate();
  useAudioVolume();
  useAudioPlayPause();
  useAudioProgress();
  useAudioSeek();
  useAudioBuffer();
}
