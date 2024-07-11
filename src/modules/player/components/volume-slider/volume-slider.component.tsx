import {useAtom} from 'jotai';
import React, {ReactElement} from 'react';
import {setVolumeAtom, volumeAtom} from 'src/atoms/volume.atoms';
import {SliderComponent} from 'src/components/slider/slider.component';

/**
 * Component to control the volume of the player
 */
export function VolumeSliderComponent(): ReactElement {
  const [volume] = useAtom(volumeAtom);
  const [, setVolume] = useAtom(setVolumeAtom);

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
