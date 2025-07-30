'use client';

import {useRouter} from 'next/navigation';
import {KeyboardEvent, MouseEvent, useCallback, useRef, useState} from 'react';
import {type MediaItem} from 'src/dtos';
import {useCurrentItem} from 'src/hooks/use-current-item';

// examples:
//   - https://www.youtube.com/watch?v=V2OMsWQWLE4
export function useInput() {
  const ref = useRef<HTMLInputElement | null>(null);
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

      const response = await fetch('/api/input', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          mediaUrl: value,
        }),
      });

      if (!response.ok) {
        purge();
        setIsError(true);
        return;
      }

      setIsError(false);

      const {item}: {item: MediaItem} = await response.json();
      await updateCurrentItem(item);
      purge();
      router.push('/');
    },
    [purge, setIsError, router, updateCurrentItem],
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
