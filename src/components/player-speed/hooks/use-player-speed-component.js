import {useCallback} from 'react';
import {useAtom} from 'jotai';
import {setSpeedAtom, speedAtom} from '../../../atoms/speed.atoms';

/**
 * Entry hook for the player speed component
 *
 * @returns {{number, Function}} - The current speed and a function to set the speed
 */
export function usePlayerSpeedComponent() {
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
