import {useEffect, useState} from 'react';

interface UseAutoplay {
  autoplay: boolean;
}

/**
 * Hook to check if autoplay is enabled
 */
export function useAutoplay(): UseAutoplay {
  const [autoplay, setAutoplay] = useState(false);

  useEffect(() => {
    (async () => {
      // https://github.com/video-dev/can-autoplay/issues/36
      import('can-autoplay')
        .then((module) => module.default.video())
        .then(({result}) => {
          if (result === true) {
            return setAutoplay(true);
          }
          setAutoplay(false);
        })
        .catch(() => setAutoplay(false));
    })();
  }, []);

  return {autoplay};
}
