import {useCallback, useState} from 'react';
import {API_BASE_URL} from 'src/constants';
import {type StreamType} from 'src/dtos';

export function useMediaFetch() {
  const [isLoading, setIsLoading] = useState(false);

  const fetchMedia = useCallback(
    async (audioUrl: string, mediaType: StreamType) => {
      setIsLoading(true);

      const response = await fetch('/api/media', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          mediaUrl: audioUrl,
          mediaType,
        }),
      });

      if (!response.ok) {
        setIsLoading(false);
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data: {token: string} = await response.json();
      setIsLoading(false);
      return `${API_BASE_URL}/v2/media/${data.token}`;
    },
    [],
  );

  return {
    fetchMedia,
    isLoading,
  };
}
