import {useAtomValue} from 'jotai/index';
import mean from 'just-mean';
import {useCallback} from 'react';
import {useInterval} from 'src/_old/hooks/use-interval';
import {audioAtom, audioPlayingAtom, audioSpeedAtom} from 'src/atoms';

export const useAudioSpeedRegister = () => {
  const audio = useAtomValue(audioAtom);
  const speed = useAtomValue(audioSpeedAtom);
  const isPlaying = useAtomValue(audioPlayingAtom);
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
