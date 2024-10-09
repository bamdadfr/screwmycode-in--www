import React from 'react';
import {useAudioRefContext} from 'src/contexts/audio-ref-context';

import {Invisible} from './audio.component.styles';
import {useAudioModule} from './hooks/use-audio-component';

interface Props {
  url: string;
}

export function AudioComponent({url}: Props) {
  const audioRef = useAudioRefContext();
  useAudioModule(url);

  return (
    <Invisible>
      <audio
        ref={audioRef}
        aria-label="player"
        // controls
      >
        <track kind="captions" />
      </audio>
    </Invisible>
  );
}
