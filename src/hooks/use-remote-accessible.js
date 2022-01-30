import ky from 'ky';
import {useEffect, useState} from 'react';

/**
 * Hook to check if a remote is accessible.
 *
 * @param {string} url - The URL to fetch.
 * @returns {boolean} - Whether the URL is accessible.
 */
export function useRemoteAccessible(url) {
  const [accessible, setAccessible] = useState(false);

  useEffect(() => {
    (async () => {
      try {
        await ky.head(url);
        setAccessible(true);
      } catch {
        setAccessible(false);
      }
    })();
  }, [url]);

  return accessible;
}
