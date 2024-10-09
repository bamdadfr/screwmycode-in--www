import {useAtom} from 'jotai';
import React, {type ReactElement} from 'react';

import {durationAtom} from '../../../../atoms/duration.atoms';
import {progressAtom} from '../../../../atoms/progress.atoms';
import {calculateMinutes} from '../../../../utils/calculate-minutes/calculate-minutes';
import {Container} from './time.component.styles';

/**
 * Component to display the current time and the duration of the video
 */
export function TimeComponent(): ReactElement {
  const [duration] = useAtom(durationAtom);
  const [progress] = useAtom(progressAtom);

  return (
    <Container>
      <span>{calculateMinutes(progress)}</span>
      &nbsp;/&nbsp;{calculateMinutes(duration)}
    </Container>
  );
}
