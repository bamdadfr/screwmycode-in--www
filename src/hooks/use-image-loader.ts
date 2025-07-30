import {useCallback, useEffect, useState} from 'react';
import {type MediaDto} from 'src/dtos';

const imageCache = new Map<
  string,
  {
    blobUrl: string;
    loading: Promise<string>;
  }
>();

export function useImageLoader(media: MediaDto | null) {
  const [blobUrl, setBlobUrl] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  const loadImage = useCallback(async (url: string) => {
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
      const response = await fetch(url);
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
  }, []);

  useEffect(() => {
    if (!media) {
      setBlobUrl(null);
      setIsLoading(false);
      return;
    }

    let cancelled = false;

    (async () => {
      setIsLoading(true);
      setError(null);

      try {
        const url = await loadImage(media.image);
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
  }, [media, loadImage]);

  return {blobUrl, isLoading, error};
}
