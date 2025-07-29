'use client';

import {useRouter} from 'next/navigation';
import {KeyboardEvent, MouseEvent, useCallback, useRef, useState} from 'react';
import {MediaResponse} from 'src/dtos';
import {useAuthToken} from 'src/hooks/use-auth-token';
import {useCurrentItem} from 'src/hooks/use-current-item';

// examples:
//   - https://www.youtube.com/watch?v=V2OMsWQWLE4
export function useInput() {
  const ref = useRef<HTMLInputElement | null>(null);
  const {token} = useAuthToken();
  const router = useRouter();
  const {updateCurrentItem} = useCurrentItem();

  const [isError, setIsError] = useState<boolean>(false);

  const purge = useCallback(() => {
    if (!ref.current) {
      return;
    }

    ref.current.value = '';
  }, [ref]);

  const handleRequest = useCallback(
    async (value: string) => {
      if (value === '') {
        return;
      }

      const isHttps = value.startsWith('https://');

      if (!isHttps) {
        purge();
        setIsError(true);
        return;
      }

      const isYoutube = value.includes('youtube.com');
      const isSoundcloud = value.includes('soundcloud.com');
      const isBandcamp = value.includes('bandcamp.com');

      if (!isYoutube && !isSoundcloud && !isBandcamp) {
        purge();
        setIsError(true);
        return;
      }

      const response = await fetch('/api/media', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`,
        },
        body: JSON.stringify({
          audioUrl: value,
          mediaType: 'audio',
        }),
      });

      if (!response.ok) {
        purge();
        setIsError(true);
        return;
      }

      setIsError(false);

      const json = await response.json();
      const result = MediaResponse.parse(json);
      await updateCurrentItem(result.item);
      purge();
      router.push('/');
    },
    [purge, setIsError, token, router, updateCurrentItem],
  );

  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.code !== 'Enter') {
        return;
      }

      e.preventDefault();

      const target = e.target as HTMLInputElement;
      const value = target.value;

      handleRequest(value).then();
    },
    [handleRequest],
  );

  const handleSubmit = useCallback(
    (e: MouseEvent) => {
      e.preventDefault();

      if (!ref.current) {
        return;
      }

      const value = ref.current.value;
      handleRequest(value).then();
    },
    [ref, handleRequest],
  );

  return {
    ref,
    isError,
    handleKeyDown,
    handleSubmit,
  };
}
