import { useEffect, useRef } from 'react';

/**
 * Hook to use setInterval
 *
 * @see https://overreacted.io/making-setinterval-declarative-with-react-hooks/
 * @param {Function|null} callback - Callback function
 * @param {number|null} delay - Delay in milliseconds
 */
export function useInterval (callback, delay) {
  const savedCallback = useRef ();

  // Remember the latest callback.
  useEffect (() => {
    savedCallback.current = callback;
  }, [callback]);

  // Set up the interval.
  useEffect (() => {
    const tick = () => savedCallback.current ();

    if (delay !== null) {
      const id = setInterval (tick, delay);
      return () => clearInterval (id);
    }
  }, [delay]);
}
