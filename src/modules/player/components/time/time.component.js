import React from 'react';
import {useAtom} from 'jotai';
import {Container} from './time.component.styles';
import {calculateMinutes} from '../../../../utils/calculate-minutes/calculate-minutes';
import {progressAtom} from '../../../../atoms/progress.atoms';
import {durationAtom} from '../../../../atoms/duration.atoms';

/**
 * Component to display the current time and the duration of the video
 *
 * @returns {React.ReactElement} - Time component
 */
export function TimeComponent() {
  const [duration] = useAtom(durationAtom);
  const [progress] = useAtom(progressAtom);

  return (
    <>
      <Container>
        <span>
          {calculateMinutes(progress)}
        </span>
        &nbsp;/&nbsp;{calculateMinutes(duration)}
      </Container>
    </>
  );
}
