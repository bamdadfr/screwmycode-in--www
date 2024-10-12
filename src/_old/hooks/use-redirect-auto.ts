import {useRouter} from 'next/router';
import {useEffect} from 'react';

/**
 * Hook to redirect automatically to a given path
 * @param target
 * @param delay
 */
export function useRedirectAuto(target = '/', delay = 2000): void {
  const router = useRouter();

  useEffect(() => {
    const t1 = setTimeout(async () => {
      await router.push(target);
    }, delay);

    return () => clearTimeout(t1);
  }, [delay, router, target]);
}
