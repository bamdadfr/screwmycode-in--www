import {NextSeo} from 'next-seo';
import React, {useEffect} from 'react';
import {usePlayerContext} from 'src/_old/contexts/player-context';
import {useDynamicTitle} from 'src/_old/hooks/use-dynamic-title';

import {Invisible} from './audio.component.styles';
import {useAudioModule} from './hooks/use-audio-component';

interface Props {
  url: string;
  defaultSpeed: string;
}

export function AudioComponent({url, defaultSpeed}: Props) {
  const {ref, setUrl, setSpeed} = usePlayerContext();
  const {dynamicTitle} = useDynamicTitle();

  useEffect(() => {
    setUrl(url);
    setSpeed(defaultSpeed);
  }, [url, setUrl, defaultSpeed, setSpeed]);

  useAudioModule();

  return (
    <>
      <NextSeo title={dynamicTitle} />

      <Invisible>
        <audio
          ref={ref}
          aria-label="player"
          // controls
        >
          <track kind="captions" />
        </audio>
      </Invisible>
    </>
  );
}
