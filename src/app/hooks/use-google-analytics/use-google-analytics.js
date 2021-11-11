import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { GA_TRACKING_ID } from './use-google-analytics.constants';

/**
 * @see https://developers.google.com/analytics/devguides/collection/gtagjs/pages
 * @param {string} url from next/router
 */
function pageview (url) {
  window.gtag ('config', GA_TRACKING_ID, {
    'page_path': url,
  });
}

const listener = (url) => pageview (url);

/**
 * Hook for using Google Analytics
 */
export function useGoogleAnalytics () {
  const router = useRouter ();

  useEffect (() => {
    router.events.on ('routeChangeComplete', listener);
    return () => router.events.off ('routeChangeComplete', listener);
  }, [router.events]);
}
