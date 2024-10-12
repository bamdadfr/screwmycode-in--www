import React from 'react';
import {usePlayerContext} from 'src/_old/contexts/player-context';
import {calculateMinutes} from 'src/_old/utils/calculate-minutes/calculate-minutes';

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
