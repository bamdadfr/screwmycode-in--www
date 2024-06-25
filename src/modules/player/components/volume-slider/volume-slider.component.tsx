import React, {ReactElement} from 'react';
import {useAtom} from 'jotai';
import {SliderComponent} from '../../../../components/slider/slider.component';
import {setVolumeAtom, volumeAtom} from '../../../../atoms/volume.atoms';

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
