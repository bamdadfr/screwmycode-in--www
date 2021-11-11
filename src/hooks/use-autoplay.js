import { useEffect, useState } from 'react';

/**
 * Hook to check if autoplay is enabled
 *
 * @returns {{boolean}} - Whether or not the video should be played automatically
 */
export function useAutoplay () {
  const [autoplay, setAutoplay] = useState (false);

  useEffect (() => {
    (async () => {
      // https://github.com/video-dev/can-autoplay/issues/36
      import ('can-autoplay')
        .then ((module) => module.default.video ())
        .then (({ result }) => {
          if (result === true) {
            return setAutoplay (true);
          }
          setAutoplay (false);
        })
        .catch (() => setAutoplay (false));
    }) ();
  }, []);

  return { autoplay };
}
