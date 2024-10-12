'use client';
import {atom, useAtom} from 'jotai';
import {useEffect} from 'react';
import {LOCAL_STORAGE_KEY} from 'src/constants';

const jwtAtom = atom<string | null>(
  typeof window !== 'undefined'
    ? localStorage.getItem(LOCAL_STORAGE_KEY.enum.JWT)
    : null,
);

export function useAuth() {
  const [token, setToken] = useAtom(jwtAtom);

  useEffect(() => {
    if (token) {
      return;
    }

    fetch('/api/auth')
      .then((r) => r.json())
      .then((data) => {
        setToken(data.token);
        localStorage.setItem(LOCAL_STORAGE_KEY.enum.JWT, data.token);
      });
  }, [token, setToken]);

  return {token};
}
