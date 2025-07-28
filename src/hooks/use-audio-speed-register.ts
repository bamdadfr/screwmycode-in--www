import {useAtomValue} from 'jotai';
import mean from 'just-mean';
import {useCallback} from 'react';
import {audioAtom} from 'src/atoms';
import {useAudioState} from 'src/components/app/hooks/use-audio-state';
import {useInterval} from 'src/hooks/use-interval';

// TODO: later
export const useAudioSpeedRegister = () => {
  const {isPlaying, speed} = useAudioState();

  const audio = useAtomValue(audioAtom);

  const registerSpeed = useCallback(() => {
    if (!audio || !isPlaying) {
      return;
    }

    audio.speed.values = [...audio.speed.values, speed];
    audio.speed.average = mean(audio.speed.values);
    console.log(audio.speed);
  }, [audio, speed, isPlaying]);

  useInterval(registerSpeed, 1000);
};
