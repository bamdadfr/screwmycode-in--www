'use client';
import {useEffect} from 'react';
import {useToken} from 'src/hooks/use-token';

export function AppToken({token}: {token: string}) {
  const {setToken} = useToken();

  useEffect(() => {
    setToken(token);
  }, [token, setToken]);

  return null;
}
