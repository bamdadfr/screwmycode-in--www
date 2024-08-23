import React, {ChangeEvent, ReactElement} from 'react';

import {Input} from './slider.component.styles';

export interface SliderComponentProps {
  min: number;
  max: number;
  step: number;
  value: number;
  buffered?: number;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  name: string;
}

export function SliderComponent({
  min,
  max,
  step,
  value,
  buffered = 0,
  onChange,
  name,
}: SliderComponentProps): ReactElement {
  return (
    <Input
      name={name}
      type="range"
      title={name}
      aria-label={name}
      min={min}
      max={max}
      step={step}
      value={value}
      buffered={buffered}
      onChange={onChange}
    />
  );
}
