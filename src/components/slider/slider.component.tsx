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
 * @param root0
 * @param root0.min
 * @param root0.max
 * @param root0.step
 * @param root0.value
 * @param root0.buffered
 * @param root0.onChange
 * @param root0.name
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
  );
}
