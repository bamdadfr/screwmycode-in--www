import {useState} from 'react';
import {useInterval} from '../../../../../hooks/use-interval';

/**
 * @param {number} [frequency] frequency - Refresh rate in milliseconds
 * @returns {string} - The current dots
 */
export function useDotsComponent(frequency = 500) {
  const [dots, setDots] = useState('');

  useInterval(() => {
    if (dots === '...') {
      return setDots('');
    }
    setDots((s) => s + '.');
  }, frequency);

  return {
    dots,
  };
}
