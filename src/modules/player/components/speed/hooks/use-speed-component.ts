import {ChangeEvent, useCallback} from 'react';
import {useAtom} from 'jotai';
import {setSpeedAtom, speedAtom} from '../../../../../atoms/speed.atoms';

interface UseSpeedComponent {
  value: number;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

/**
 * Entry hook for the player speed component
 */
export function useSpeedComponent(): UseSpeedComponent {
  const [speed] = useAtom(speedAtom);
  const [, setSpeed] = useAtom(setSpeedAtom);

  const onChange = useCallback((e) => {
    setSpeed(e.target.value);
  }, [setSpeed]);

  return {
    value: speed,
    onChange,
  };
}
