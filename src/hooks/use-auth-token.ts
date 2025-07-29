'use client';

import {atom, useAtom} from 'jotai';
import {useCallback} from 'react';
import {LOCAL_STORAGE_KEY} from 'src/constants';

const jwtAtom = atom<string | null>(
  typeof window !== 'undefined'
    ? localStorage.getItem(LOCAL_STORAGE_KEY.enum.JWT)
    : null,
);

export function useAuthToken() {
  const [token, setToken] = useAtom(jwtAtom);

  const generate = useCallback(async () => {
    const response = await fetch('/api/auth/generate');
    const data = await response.json();
    setToken(data.token);
    localStorage.setItem(LOCAL_STORAGE_KEY.enum.JWT, data.token);
  }, [setToken]);

  const getIsValid = useCallback(async () => {
    if (!token) {
      return false;
    }

    const response = await fetch('/api/auth/verify', {
      headers: {Authorization: `Bearer ${token}`},
    });

    return response.ok;
  }, [token]);

  const reload = useCallback(() => {
    window.location.reload();
  }, []);

  return {token, generate, getIsValid, reload};
}
