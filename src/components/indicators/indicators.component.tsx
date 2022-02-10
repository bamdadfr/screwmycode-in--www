import React, {ReactElement} from 'react';
import {Container} from './indicators.component.styles';
import {useIndicatorsComponent} from './hooks/use-indicators-component';
import {IndicatorComponent} from './components/indicator/indicator.component';

/**
 * Component for the indicators
 */
export function IndicatorsComponent(): ReactElement {
  const {percentage, semitones} = useIndicatorsComponent();

  return (
    <>
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
    </>
  );
}
