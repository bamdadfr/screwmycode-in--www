import {NextRouter} from 'next/router';

const providers = {
  youtube: 'YouTube',
  soundcloud: 'SoundCloud',
  bandcamp: 'Bandcamp',
};

export function getProviderFromRouter(router: NextRouter): string {
  return providers[router.pathname.split('/')[1]];
}
