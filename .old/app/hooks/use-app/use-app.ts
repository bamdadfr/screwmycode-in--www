import {useGoogleAnalytics} from '../use-google-analytics/use-google-analytics';

/**
 * Entry hook for the Next.js app
 */
export function useApp(): void {
  useGoogleAnalytics();
}
