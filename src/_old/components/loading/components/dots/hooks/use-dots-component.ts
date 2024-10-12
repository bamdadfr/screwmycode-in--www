import {useState} from 'react';
import {useInterval} from 'src/_old/hooks/use-interval';

interface UseDotsComponent {
  dots: string;
}

/**
 * Animate the dots
 * @param frequency
 */
export function useDotsComponent(frequency = 500): UseDotsComponent {
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
