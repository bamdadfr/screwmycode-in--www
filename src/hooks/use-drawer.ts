import {atom, useAtom} from 'jotai';
import {useCallback} from 'react';

const isOpenAtom = atom(false);
const isHoverAtom = atom(false);

export function useDrawer() {
  const [isOpen, setIsOpen] = useAtom(isOpenAtom);
  const [isHover, setIsHover] = useAtom(isHoverAtom);

  const toggleIsOpen = useCallback(() => {
    setIsOpen((o) => !o);
  }, [setIsOpen]);

  return {
    isOpen,
    setIsOpen,
    toggleIsOpen,
    isHover,
    setIsHover,
  };
}
