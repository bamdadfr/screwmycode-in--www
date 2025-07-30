import {useCallback, useEffect, useState} from 'react';
import {useMediaFetch} from 'src/hooks/use-media-fetch';

const imageCache = new Map<
  string,
  {
    blobUrl: string;
    loading: Promise<string>;
  }
>();

export function useImageLoader(itemUrl: string | null) {
  const [blobUrl, setBlobUrl] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);
  const {fetchMedia} = useMediaFetch();

  const loadImage = useCallback(
    async (url: string) => {
      // Check cache first
      const cached = imageCache.get(url);
      if (cached) {
        // If already loading, wait for it
        if (cached.loading) {
          const result = await cached.loading;
          return result;
        }
        return cached.blobUrl;
      }

      // Create loading promise
      const loadingPromise = (async () => {
        const signedUrl = await fetchMedia(url, 'image');
        const response = await fetch(signedUrl);
        const blob = await response.blob();
        const blobUrl = URL.createObjectURL(blob);

        imageCache.set(url, {
          blobUrl,
          loading: null as unknown as Promise<string>,
        });

        return blobUrl;
      })();

      imageCache.set(url, {blobUrl: '', loading: loadingPromise});

      return await loadingPromise;
    },
    [fetchMedia],
  );

  useEffect(() => {
    if (!itemUrl) {
      setBlobUrl(null);
      setIsLoading(false);
      return;
    }

    let cancelled = false;

    (async () => {
      setIsLoading(true);
      setError(null);

      try {
        const url = await loadImage(itemUrl);
        if (!cancelled) {
          setBlobUrl(url);
        }
      } catch (err) {
        if (!cancelled) {
          setError(err as Error);
          console.error('Failed to load image:', err);
        }
      } finally {
        if (!cancelled) {
          setIsLoading(false);
        }
      }
    })();

    return () => {
      cancelled = true;
    };
  }, [itemUrl, loadImage]);

  return {blobUrl, isLoading, error};
}
