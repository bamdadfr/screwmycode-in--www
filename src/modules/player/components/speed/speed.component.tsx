import React, {ReactElement} from 'react';
import {SliderComponent} from 'src/components/slider/slider.component';

import {useSpeedComponent} from './hooks/use-speed-component';

/**
 * Component for the player speed
 */
export function SpeedComponent(): ReactElement {
  const {value, onChange} = useSpeedComponent();

  return (
    <SliderComponent
      name="speed slider"
      min={0.5}
      max={1.5}
      step={0.005}
      value={value}
      onChange={onChange}
    />
  );
}
