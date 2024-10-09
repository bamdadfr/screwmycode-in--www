import React from 'react';
import {usePlayerContext} from 'src/contexts/player-context';
import {calculateMinutes} from 'src/utils/calculate-minutes/calculate-minutes';

import {Container} from './time.component.styles';

export function TimeComponent() {
  const {duration, progress} = usePlayerContext();

  return (
    <Container>
      <span>{calculateMinutes(progress)}</span>
      &nbsp;/&nbsp;{calculateMinutes(duration)}
    </Container>
  );
}
