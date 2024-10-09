import React, {type ReactElement} from 'react';
import {SliderComponent} from 'src/components/slider/slider.component';
import {useAudioPlayerContext} from 'src/contexts/audio-player-context';

export function SeekComponent(): ReactElement {
  const {buffered, duration, progress, handleSeek} = useAudioPlayerContext();

  return (
    <SliderComponent
      name="seek slider"
      min={0}
      max={duration}
      step={1}
      value={progress}
      buffered={buffered}
      onChange={handleSeek}
    />
  );
}
