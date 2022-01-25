import React from 'react';
import {useAtom} from 'jotai';
import {SliderComponent} from '../../../../components/slider/slider.component';
import {progressAtom} from '../../../../atoms/progress.atoms';
import {durationAtom} from '../../../../atoms/duration.atoms';
import {setSeekAtom} from '../../../../atoms/seek.atoms';

/**
 * Component to seek in the audio
 *
 * @returns {React.ReactElement} - Seek component
 */
export function SeekComponent() {
  const [progress] = useAtom(progressAtom);
  const [duration] = useAtom(durationAtom);
  const [, setSeek] = useAtom(setSeekAtom);

  return (
    <>
      <SliderComponent
        name="seek slider"
        min={0}
        max={duration}
        step={1}
        value={progress}
        onChange={(e) => setSeek(Math.floor(e.target.value))}
      />
    </>
  );
}
