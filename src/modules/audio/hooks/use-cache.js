import { useEffect, useState } from 'react';
import { useInterval } from '../../../hooks/use-interval';

/**
 * Hook for caching a value and updating it every `interval` milliseconds.
 * Useful to control rendering of a value that is expensive to compute.
 *
 * @param {*} value - The value to cache.
 * @param {number} delay - The delay in milliseconds between updates.
 * @returns {number} - The cached value.
 */
export function useCache (value, delay) {
  const [cachedValue, setCachedValue] = useState (value);
  const [isRunning, setIsRunning] = useState (false);

  // detect when interval needs to run
  useEffect (() => {
    if (value === cachedValue) {
      return setIsRunning (false);
    }

    setIsRunning (true);
  }, [value, cachedValue]);

  // setup interval
  useInterval (() => {
    if (value === cachedValue) {
      return;
    }

    setCachedValue (value);
  }, isRunning ? delay : null);

  return cachedValue;
}
