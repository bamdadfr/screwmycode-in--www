import {useAudioBuffer} from 'src/components/app/hooks/useAudioBuffer';
import {useAudioKeyboard} from 'src/components/app/hooks/useAudioKeyboard';
import {useAudioLoad} from 'src/components/app/hooks/useAudioLoad';
import {useAudioLoop} from 'src/components/app/hooks/useAudioLoop';
import {useAudioPitch} from 'src/components/app/hooks/useAudioPitch';
import {useAudioPlaybackRate} from 'src/components/app/hooks/useAudioPlaybackRate';
import {useAudioPlayPause} from 'src/components/app/hooks/useAudioPlayPause';
import {useAudioProgress} from 'src/components/app/hooks/useAudioProgress';
import {useAudioSeek} from 'src/components/app/hooks/useAudioSeek';
import {useAudioVolume} from 'src/components/app/hooks/useAudioVolume';

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
