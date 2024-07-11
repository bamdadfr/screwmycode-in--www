import React, {ReactElement} from 'react';

import {IndicatorComponent} from './components/indicator/indicator.component';
import {useIndicatorsComponent} from './hooks/use-indicators-component';
import {Container} from './indicators.component.styles';

/**
 * Component for the indicators
 */
export function IndicatorsComponent(): ReactElement {
  const {percentage, semitones} = useIndicatorsComponent();

  return (
    <Container>
      <IndicatorComponent
        title="percent"
        metaName="percentage"
        value={`${percentage} %`}
      />
      <IndicatorComponent
        title="semitone"
        metaName="semitones"
        value={`${semitones} st`}
      />
    </Container>
  );
}
