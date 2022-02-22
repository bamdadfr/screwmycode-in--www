import React, {ReactElement} from 'react';
import {useAudioModule} from './hooks/use-audio-component';
import {Invisible} from './audio.component.styles';

interface Props {
  url: string;
}

/**
 * Component to play audio files
 */
export function AudioComponent({url}: Props): ReactElement {
  const {ref} = useAudioModule(url);

  return (
    <>
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
