import React, {ChangeEvent, useMemo} from 'react';

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
}: SliderComponentProps) {
  const progressPosition = useMemo(
    () => (value - min) / (max - min),
    [min, max, value],
  );

  const bufferedPosition = useMemo(
    () => (buffered - min) / (max - min),
    [min, max, buffered],
  );

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
      onChange={onChange}
      style={{
        '--progress': progressPosition,
        '--buffered': bufferedPosition,
      }}
    />
  );
}
