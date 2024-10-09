import React from 'react';
import {useAudioRefContext} from 'src/contexts/audio-ref-context';

import {Invisible} from './audio.component.styles';
import {useAudioModule} from './hooks/use-audio-component';

export function AudioComponent() {
  const audioRef = useAudioRefContext();
  useAudioModule();

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
