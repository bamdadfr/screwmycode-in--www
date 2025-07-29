import {useCallback, useEffect, useState} from 'react';
import {useAuth} from 'src/hooks/use-auth';
import {useMediaFetch} from 'src/hooks/use-media-fetch';

// Global cache to persist across component instances
const imageCache = new Map<
  string,
  {
    blobUrl: string;
    loading: Promise<string>;
  }
>();

// Cleanup blob URLs when no longer needed
// const cleanupBlobUrl = (url: string) => {
//   const cached = Array.from(imageCache.entries()).find(
//     ([_, value]) => value.blobUrl === url,
//   );
//   if (cached) {
//     URL.revokeObjectURL(url);
//     imageCache.delete(cached[0]);
//   }
// };

export function useImageLoader(itemUrl: string | null) {
  const [blobUrl, setBlobUrl] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);
  const {fetchMedia} = useMediaFetch();
  const {token} = useAuth();

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
        try {
          // Get authenticated URL from your backend
          const authenticatedUrl = await fetchMedia(url, 'image');

          // Fetch with authentication headers
          const response = await fetch(authenticatedUrl, {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          });

          if (!response.ok) {
            throw new Error(`Failed to load image: ${response.status}`);
          }

          // Convert to blob
          const blob = await response.blob();
          const blobUrl = URL.createObjectURL(blob);

          // Update cache with final result
          imageCache.set(url, {
            blobUrl,
            loading: null as unknown as Promise<string>,
          });

          return blobUrl;
        } catch (err) {
          // Remove from cache on error
          imageCache.delete(url);
          throw err;
        }
      })();

      // Store loading promise in cache
      imageCache.set(url, {blobUrl: '', loading: loadingPromise});

      return await loadingPromise;
    },
    [fetchMedia, token],
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

// Optional: Export cache utilities
// export const preloadImage = async (
//   url: string,
//   fetchMedia: any,
//   token: string,
// ) => {
//   if (imageCache.has(url)) {
//     return;
//   }
//
//   const loadingPromise = (async () => {
//     const authenticatedUrl = await fetchMedia(url, 'image');
//     const response = await fetch(authenticatedUrl, {
//       headers: {Authorization: `Bearer ${token}`},
//     });
//     const blob = await response.blob();
//     return URL.createObjectURL(blob);
//   })();
//
//   imageCache.set(url, {blobUrl: '', loading: loadingPromise});
//   return loadingPromise;
// };

// export const clearImageCache = () => {
//   imageCache.forEach(({blobUrl}) => {
//     if (blobUrl) {
//       URL.revokeObjectURL(blobUrl);
//     }
//   });
//   imageCache.clear();
// };
