import {NextRouter} from 'next/router';

const providers = {
  youtube: 'YouTube',
  soundcloud: 'SoundCloud',
};

/**
 * Get the provider name from the URL
 */
export function getProviderFromRouter(router: NextRouter): string {
  return providers[router.pathname.split('/')[1]];
}
