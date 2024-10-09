import React from 'react';
import {useAudioPlayerContext} from 'src/contexts/audio-player-context';
import {calculateMinutes} from 'src/utils/calculate-minutes/calculate-minutes';

import {Container} from './time.component.styles';

export function TimeComponent() {
  const {duration, progress} = useAudioPlayerContext();

  return (
    <Container>
      <span>{calculateMinutes(progress)}</span>
      &nbsp;/&nbsp;{calculateMinutes(duration)}
    </Container>
  );
}
