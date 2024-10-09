import React, {type ReactElement} from 'react';

import {Invisible} from './audio.component.styles';
import {useAudioModule} from './hooks/use-audio-component';

interface Props {
  url: string;
}

export function AudioComponent({url}: Props): ReactElement {
  const {ref} = useAudioModule(url);

  return (
    <Invisible>
      <audio
        ref={ref}
        aria-label="player"
        // controls
      >
        <track kind="captions" />
      </audio>
    </Invisible>
  );
}
