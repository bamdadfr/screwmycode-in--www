import React, {ReactElement} from 'react';
import {useAtom} from 'jotai';
import {SliderComponent} from '../../../../components/slider/slider.component';
import {progressAtom} from '../../../../atoms/progress.atoms';
import {durationAtom} from '../../../../atoms/duration.atoms';
import {setSeekAtom} from '../../../../atoms/seek.atoms';
import {bufferedAtom} from '../../../../atoms/buffered.atoms';

/**
 * Component to seek in the audio
 */
export function SeekComponent(): ReactElement {
  const [progress] = useAtom(progressAtom);
  const [buffered] = useAtom(bufferedAtom);
  const [duration] = useAtom(durationAtom);
  const [, setSeek] = useAtom(setSeekAtom);

  return (
    <SliderComponent
      name="seek slider"
      min={0}
      max={duration}
      step={1}
      value={progress}
      buffered={buffered}
      onChange={(e) => {
        const newProgress = Math.floor(parseFloat(e.target.value));

        if (newProgress > buffered) {
          return;
        }

        setSeek(newProgress);
      }}
    />
  );
}
