import {ChangeEvent, useCallback} from 'react';
import {usePlayerContext} from 'src/_old/contexts/player-context';

interface UseSpeedComponent {
  value: number;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

export function useSpeedComponent(): UseSpeedComponent {
  const {speed, setSpeed} = usePlayerContext();

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
