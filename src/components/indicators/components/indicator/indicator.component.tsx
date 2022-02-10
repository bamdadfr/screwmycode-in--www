import React from 'react';
import {InputTitle, InputValue, Wrapper} from './indicator.component.styles';

interface IndicatorComponentProps {
  title: string;
  value: string;
  metaName: string;
}

/**
 * Component for displaying indicator
 */
export function IndicatorComponent({
  title,
  value,
  metaName,
}: IndicatorComponentProps): React.ReactElement {
  return (
    <>
      <Wrapper>
        <InputTitle title={metaName}>
          {title}
        </InputTitle>
        <InputValue
          disabled
          aria-label={metaName}
          value={value}
        />
      </Wrapper>
    </>
  );
}
