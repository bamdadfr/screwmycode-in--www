import {useAtomValue} from 'jotai';
import mean from 'just-mean';
import {useCallback} from 'react';
import {audioAtom} from 'src/atoms';
import {
  audioIsPlayingAtom,
  audioSpeedAtom,
} from 'src/components/app/hooks/audio-atoms';
import {useInterval} from 'src/hooks/use-interval';

// TODO: later
export const useAudioSpeedRegister = () => {
  const speed = useAtomValue(audioSpeedAtom);
  const isPlaying = useAtomValue(audioIsPlayingAtom);
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
