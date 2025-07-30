'use client';

import {useRouter} from 'next/navigation';
import {KeyboardEvent, MouseEvent, useCallback, useRef, useState} from 'react';
import {useCurrentMedia} from 'src/hooks/use-current-media';
import {useToken} from 'src/hooks/use-token';
import {createMedia} from 'src/utils';

// examples:
//   - https://www.youtube.com/watch?v=V2OMsWQWLE4
//   - https://wearesanto.bandcamp.com/track/santo-cuff-it-miami-bass-edit
//   - https://soundcloud.com/ilyacesavage/scheming-prod-cormill
export function useInput() {
  const ref = useRef<HTMLInputElement | null>(null);
  const router = useRouter();
  const {update} = useCurrentMedia();
  const {token} = useToken();
  const [isError, setIsError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [needsRedirect, setNeedsRedirect] = useState(false);

  const error = useCallback(() => {
    setIsLoading(false);
    setIsError(true);
    setTimeout(() => setIsError(false), 600);
  }, [setIsError, setIsLoading]);

  const purge = useCallback(() => {
    if (!ref.current) {
      return;
    }

    ref.current.value = '';
    ref.current.focus();
  }, [ref]);

  const handleRequest = useCallback(
    async (url: string) => {
      if (url === '' || token === null || isLoading || isError) {
        return;
      }

      setIsLoading(false);

      const isHttps = url.startsWith('https://');

      if (!isHttps) {
        error();
        purge();
        return;
      }

      const isYoutube = url.includes('youtube.com');
      const isSoundcloud = url.includes('soundcloud.com');
      const isBandcamp = url.includes('bandcamp.com');

      if (!isYoutube && !isSoundcloud && !isBandcamp) {
        error();
        purge();
        return;
      }

      try {
        const item = await createMedia(token, url);
        await update(item);
        setNeedsRedirect(true);
        setIsLoading(false);
      } catch {
        error();
      }
    },
    [
      purge,
      update,
      token,
      error,
      setIsLoading,
      isError,
      isLoading,
      setNeedsRedirect,
    ],
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

  const redirect = useCallback(() => {
    router.push('/');
    purge();
    setNeedsRedirect(false);
  }, [router, purge, setNeedsRedirect]);

  return {
    ref,
    handleKeyDown,
    handleSubmit,
    isError,
    isLoading,
    needsRedirect,
    redirect,
  };
}
