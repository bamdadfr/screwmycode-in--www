import {useCallback} from 'react';
import {useRouter} from 'next/router';

/**
 * @returns {{Function}} useTableComponent
 */
export function useTableComponent() {
  const router = useRouter();

  const onClick = useCallback((type, id) => {
    (async () => {
      await router.push(`/${type}/${id}/1`);
    })();
  }, [router]);

  return {onClick};
}
