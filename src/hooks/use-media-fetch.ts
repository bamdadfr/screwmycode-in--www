import {useCallback, useState} from 'react';
import {type StreamType} from 'src/dtos';
import {useAuthToken} from 'src/hooks/use-auth-token';

export function useMediaFetch() {
  const {token} = useAuthToken();
  const [isLoading, setIsLoading] = useState(false);

  const fetchMedia = useCallback(
    async (audioUrl: string, mediaType: StreamType) => {
      if (!audioUrl || !token) {
        return;
      }

      setIsLoading(true);

      const response = await fetch('/api/media', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`,
        },
        body: JSON.stringify({
          audioUrl,
          mediaType,
        }),
      });

      if (!response.ok) {
        setIsLoading(false);
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      setIsLoading(false);
      return data.media_url;
    },
    [token],
  );

  return {
    fetchMedia,
    isLoading,
  };
}
