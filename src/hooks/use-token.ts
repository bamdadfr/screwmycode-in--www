import {atom, useAtom} from 'jotai';

const tokenAtom = atom<string | null>(null);

export function useToken() {
  const [token, setToken] = useAtom(tokenAtom);

  return {
    token,
    setToken,
  };
}
