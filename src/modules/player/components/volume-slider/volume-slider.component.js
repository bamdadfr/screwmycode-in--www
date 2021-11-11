import React from 'react';
import { useAtom } from 'jotai';
import { SliderComponent } from '../../../../components/slider/slider.component';
import { setVolumeAtom, volumeAtom } from '../../../../atoms/volume.atoms';

/**
 * Component to control the volume of the player
 *
 * @returns {React.ReactElement} - Volume slider component
 */
export function VolumeSliderComponent () {
  const [volume] = useAtom (volumeAtom);
  const [, setVolume] = useAtom (setVolumeAtom);

  return (
    <>
      <SliderComponent
        name="volume slider"
        min={0}
        max={1}
        step={0.01}
        value={volume}
        onChange={(e) => setVolume (e.target.value)}
      />
    </>
  );
}
