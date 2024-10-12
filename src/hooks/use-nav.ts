import {atom, useAtom} from 'jotai';
import {useCallback} from 'react';

const isOpenAtom = atom(true);

export function useNav() {
  const [isOpen, setIsOpen] = useAtom(isOpenAtom);

  const toggleIsOpen = useCallback(() => {
    setIsOpen((o) => !o);
  }, [setIsOpen]);

  return {
    isOpen,
    setIsOpen,
    toggleIsOpen,
  };
}
