import {useEffect} from 'react';
import {useRouter} from 'next/router';

/**
 * Hook to redirect automatically to a given path
 *
 * @param {string} [target='/'] - Target path
 * @param {number} [delay=2000] - Delay before redirecting
 */
export function useRedirectAuto(target = '/', delay = 2000) {
  const router = useRouter();

  useEffect(() => {
    const t1 = setTimeout(async () => {
      await router.push(target);
    }, delay);

    return () => clearTimeout(t1);
  }, [delay, router, target]);
}
