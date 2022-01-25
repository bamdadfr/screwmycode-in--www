import React, {useCallback, useRef, useState} from 'react';

/**
 * Hook to handle input value
 *
 * @param {string} [defaultValue=''] - Default value
 * @typedef {React.Ref} Ref - React ref
 * @typedef {number} Value - Input value
 * @typedef {Function} OnChange - Callback function
 * @typedef {Function} ResetValue - Callback function
 * @returns {{Ref, Value, OnChange, ResetValue}} - Input state
 */
export function useInput(defaultValue = '') {
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
