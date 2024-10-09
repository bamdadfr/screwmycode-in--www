import {NextSeo} from 'next-seo';
import React, {useEffect} from 'react';
import {useAudioPlayerContext} from 'src/contexts/audio-player-context';
import {useAudioRefContext} from 'src/contexts/audio-ref-context';
import {useDynamicTitle} from 'src/hooks/use-dynamic-title';

import {Invisible} from './audio.component.styles';
import {useAudioModule} from './hooks/use-audio-component';

interface Props {
  defaultSpeed: string;
}

export function AudioComponent({defaultSpeed}: Props) {
  const audioRef = useAudioRefContext();
  const {dynamicTitle} = useDynamicTitle();
  const {setSpeed} = useAudioPlayerContext();

  useEffect(() => {
    setSpeed(defaultSpeed);
  }, [defaultSpeed, setSpeed]);

  useAudioModule();

  return (
    <>
      <NextSeo title={dynamicTitle} />

      <Invisible>
        <audio
          ref={audioRef}
          aria-label="player"
          // controls
        >
          <track kind="captions" />
        </audio>
      </Invisible>
    </>
  );
}
