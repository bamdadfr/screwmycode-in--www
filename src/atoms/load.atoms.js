import { atom } from 'jotai';

export const isLoadedAtom = atom (false);

export const setLoadedAtom = atom (
  null,
  (get, set, arg) => set (isLoadedAtom, arg),
);
