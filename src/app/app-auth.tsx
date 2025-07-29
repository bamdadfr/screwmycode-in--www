'use client';

import {useEffect} from 'react';
import {useAuthToken} from 'src/hooks/use-auth-token';

export function AppAuth() {
  const {generate, getIsValid, reload} = useAuthToken();

  useEffect(() => {
    getIsValid().then((isValid) => {
      if (isValid) {
        return;
      }

      generate().then(reload);
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return <></>;
}
