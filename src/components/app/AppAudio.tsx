'use client';

import {useSetAtom} from 'jotai';
import {useEffect, useRef} from 'react';
import {audioRefAtom} from 'src/atoms';
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
import {useAudioSpeedRegister} from 'src/hooks/useAudioSpeedRegister';

export const AppAudio = () => {
  const ref = useRef<HTMLAudioElement | null>(null);
  const setRef = useSetAtom(audioRefAtom);

  useEffect(() => {
    setRef(ref.current);
  }, [ref, setRef]);

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
  useAudioSpeedRegister();

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
