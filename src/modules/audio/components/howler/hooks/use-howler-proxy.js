import {useEffect, useState} from 'react';
import {useRouter} from 'next/router';
import axios from 'axios';
import {
  getUrlWithProxy,
} from '../../../../../utils/get-url-with-proxy/get-url-with-proxy';

/**
 * Hook to proxy howler requests
 *
 * @param {object} options - Options
 * @param {string} options.url - URL to proxy
 * @typedef {boolean} ProxyReady - Whether the proxy is ready
 * @returns {{ProxyReady}} - ProxyReady
 */
export function useHowlerProxy({url}) {
  const router = useRouter();
  const [proxyReady, setProxyReady] = useState(false);
  const [proxyFailed, setProxyFailed] = useState(false);

  useEffect(() => {
    (async () => {
      try {
        const axiosConfig = {
          headers: {
            'X-Requested-With': 'XMLHttpRequest',
          },
        };

        // warmup
        await axios.head(getUrlWithProxy('https://api.screwmycode.in/'), axiosConfig);

        // target
        await axios.head(getUrlWithProxy(url), axiosConfig);

        setProxyReady(true);
      } catch (error) {
        setProxyFailed(true);
      }
    })();
  }, [router, url, setProxyReady]);

  useEffect(() => {
    if (!proxyFailed) {
      return;
    }

    (async () => {
      await router.replace('/');
    })();
  }, [proxyFailed, router]);

  return {
    proxyReady,
  };
}
