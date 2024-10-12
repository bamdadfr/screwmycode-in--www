import {useEffect, useRef} from 'react';

type Callback = () => void;

/**
 * Hook to use setInterval
 * @see https://overreacted.io/making-setinterval-declarative-with-react-hooks/
 */
export function useInterval(callback: Callback, delay: number): void {
  const savedCallback = useRef<Callback | null>(null);

  // Remember the latest callback.
  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  // Set up the interval.
  useEffect(() => {
    const tick = () => savedCallback.current && savedCallback.current();

    if (delay !== null) {
      const id = setInterval(tick, delay);
      return () => clearInterval(id);
    }
  }, [delay]);
}
