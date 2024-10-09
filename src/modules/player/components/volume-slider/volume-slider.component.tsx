import React, {type ReactElement} from 'react';
import {SliderComponent} from 'src/components/slider/slider.component';
import {usePlayerContext} from 'src/contexts/player-context';

export function VolumeSliderComponent(): ReactElement {
  const {volume, setVolume} = usePlayerContext();

  return (
    <SliderComponent
      name="volume slider"
      min={0}
      max={1}
      step={0.01}
      value={volume}
      onChange={(e) => setVolume(parseFloat(e.target.value))}
    />
  );
}
