import {useEffect, useState} from 'react';
import {type StreamType} from 'src/dtos';
import {useAuth} from 'src/hooks/use-auth';

export function useMediaToken(
  audioUrl: string | undefined,
  mediaType: StreamType,
) {
  const {token} = useAuth();
  const [mediaUrl, setMediaUrl] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!audioUrl || !token) {
      setLoading(false);
      return;
    }

    const fetchToken = async () => {
      try {
        // Call Next.js API route instead of Django directly
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
        setMediaUrl(data.media_url);

        // Auto-refresh token before expiry (refresh at 80% of lifetime)
        const refreshTime = data.expires_in * 0.8 * 1000;
        const refreshTimer = setTimeout(() => {
          fetchToken(); // Recursive refresh
        }, refreshTime);

        return () => clearTimeout(refreshTimer);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchToken().then();
  }, [audioUrl, mediaType, token]);

  return {url: mediaUrl, loading, error};
}
