import {atom} from 'jotai';

export const isLoadedAtom = atom(false);

export const setLoadedAtom = atom(
  null,
  (_get, set, arg) => set(isLoadedAtom, arg),
);
