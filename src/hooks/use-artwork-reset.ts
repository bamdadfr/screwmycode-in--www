import {atom, useAtom} from 'jotai';
import {useCallback} from 'react';

// trigger
export const isResetAtom = atom<boolean>(false);

export function useArtworkReset() {
  const [isReset, setIsReset] = useAtom(isResetAtom);

  const reset = useCallback(() => {
    setIsReset(true);
  }, [setIsReset]);

  return {
    isReset,
    setIsReset,
    reset,
  };
}
