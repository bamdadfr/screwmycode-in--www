import {useRouter} from 'next/router';

export function usePlayerLayout() {
  const router = useRouter();
  const canonical = 'https://www.screwmycode.in/' + router.asPath;

  return {
    canonical,
  };
}
