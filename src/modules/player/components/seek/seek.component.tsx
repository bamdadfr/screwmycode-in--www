import {useAtom} from 'jotai';
import React, {ReactElement} from 'react';
import {bufferedAtom} from 'src/atoms/buffered.atoms';
import {durationAtom} from 'src/atoms/duration.atoms';
import {progressAtom} from 'src/atoms/progress.atoms';
import {setSeekAtom} from 'src/atoms/seek.atoms';
import {SliderComponent} from 'src/components/slider/slider.component';

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
