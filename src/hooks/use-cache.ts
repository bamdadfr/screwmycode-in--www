import {useEffect, useState} from 'react';
import {useInterval} from './use-interval';

/**
 * Hook for caching a value and updating it every `interval` milliseconds.
 * Useful to control rendering of a value that is expensive to compute.
 */
export function useCache<T>(value: T, interval: number): T {
  const [cachedValue, setCachedValue] = useState(value);
  const [isRunning, setIsRunning] = useState(false);

  // detect when interval needs to run
  useEffect(() => {
    if (value === cachedValue) {
      return setIsRunning(false);
    }

    setIsRunning(true);
  }, [value, cachedValue]);

  // setup interval
  useInterval(
    () => {
      if (value === cachedValue) {
        return;
      }

      setCachedValue(value);
    },
    isRunning ? interval : 0,
  );

  return cachedValue;
}
