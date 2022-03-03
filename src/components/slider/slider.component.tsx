import React, {ChangeEvent, ReactElement} from 'react';
import {Input} from './slider.component.styles';

interface SliderComponentProps {
  min: number;
  max: number;
  step: number;
  value: number;
  buffered?: number;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  name: string;
}

/**
 * Component for a slider
 */
export function SliderComponent({
  min,
  max,
  step,
  value,
  buffered,
  onChange,
  name,
}: SliderComponentProps): ReactElement {
  return (
    <>
      <Input
        type="range"
        title={name}
        aria-label={name}
        min={min}
        max={max}
        step={step}
        value={value}
        buffered={buffered ? buffered : 0}
        onChange={onChange}
      />
    </>
  );
}
