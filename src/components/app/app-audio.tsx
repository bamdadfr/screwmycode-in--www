'use client';

import {useSetAtom} from 'jotai';
import {useEffect, useRef} from 'react';
import {audioDomReferenceAtom} from 'src/components/app/hooks/audio-atoms';
import {useAudioKeyboard} from 'src/components/app/hooks/use-audio-keyboard';
import {useAudioLoad} from 'src/components/app/hooks/use-audio-load';
import {useAudioLoop} from 'src/components/app/hooks/use-audio-loop';
import {useAudioPitch} from 'src/components/app/hooks/use-audio-pitch';
import {useAudioPlayPause} from 'src/components/app/hooks/use-audio-play-pause';
import {useAudioPlaybackRate} from 'src/components/app/hooks/use-audio-playback-rate';
import {useAudioProgress} from 'src/components/app/hooks/use-audio-progress';
import {useAudioSeek} from 'src/components/app/hooks/use-audio-seek';
import {useAudioVolume} from 'src/components/app/hooks/use-audio-volume';

export const AppAudio = () => {
  const setDomReference = useSetAtom(audioDomReferenceAtom);
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
