import {useCallback} from 'react';
import {type StreamType} from 'src/dtos';
import {useAuth} from 'src/hooks/use-auth';

export function useMediaFetch() {
  const {token} = useAuth();

  const fetchMedia = useCallback(
    async (audioUrl: string, mediaType: StreamType) => {
      if (!audioUrl || !token) {
        return;
      }

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
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      return data.media_url;
    },
    [token],
  );

  return {
    fetchMedia,
  };
}
