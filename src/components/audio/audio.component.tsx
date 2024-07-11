import React, {ReactElement} from 'react';

import {Invisible} from './audio.component.styles';
import {useAudioModule} from './hooks/use-audio-component';

interface Props {
  url: string;
}

/**
 * Component to play audio files
 * @param root0
 * @param root0.url
 */
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
