import {ChangeEvent, useCallback} from 'react';
import {useAudioPlayerContext} from 'src/contexts/audio-player-context';

interface UseSpeedComponent {
  value: number;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

export function useSpeedComponent(): UseSpeedComponent {
  const {speed, setSpeed} = useAudioPlayerContext();

  const onChange = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      setSpeed(e.target.value);
    },
    [setSpeed],
  );

  return {
    value: speed,
    onChange,
  };
}
