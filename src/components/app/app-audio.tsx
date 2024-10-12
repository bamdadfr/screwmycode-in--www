'use client';

import {useEffect, useRef} from 'react';
import {useAudioBuffer} from 'src/components/app/hooks/use-audio-buffer';
import {useAudioKeyboard} from 'src/components/app/hooks/use-audio-keyboard';
import {useAudioLoad} from 'src/components/app/hooks/use-audio-load';
import {useAudioLoop} from 'src/components/app/hooks/use-audio-loop';
import {useAudioPitch} from 'src/components/app/hooks/use-audio-pitch';
import {useAudioPlayPause} from 'src/components/app/hooks/use-audio-play-pause';
import {useAudioPlaybackRate} from 'src/components/app/hooks/use-audio-playback-rate';
import {useAudioProgress} from 'src/components/app/hooks/use-audio-progress';
import {useAudioSeek} from 'src/components/app/hooks/use-audio-seek';
import {useAudioState} from 'src/components/app/hooks/use-audio-state';
import {useAudioVolume} from 'src/components/app/hooks/use-audio-volume';

export const AppAudio = () => {
  const {setDomReference} = useAudioState();
  const ref = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    setDomReference(ref.current);
  }, [ref, setDomReference]);

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

  return (
    <div className="hidden">
      <audio
        ref={ref}
        controls
      >
        <track kind="captions" />
      </audio>
    </div>
  );
};
