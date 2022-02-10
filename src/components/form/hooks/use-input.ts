import {ChangeEvent, RefObject, useCallback, useRef, useState} from 'react';

export interface UseInput {
  ref: RefObject<HTMLInputElement>;
  value: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  resetValue: () => void;
}

/**
 * Hook to handle input value
 */
export function useInput(defaultValue = ''): UseInput {
  const [value, setValue] = useState(defaultValue);
  const ref = useRef(null);

  const onChange = useCallback((e) => {
    setValue(e.target.value);
  }, []);

  const resetValue = useCallback(() => {
    setValue(defaultValue);
  }, [defaultValue]);

  return {
    ref,
    value,
    onChange,
    resetValue,
  };
}
