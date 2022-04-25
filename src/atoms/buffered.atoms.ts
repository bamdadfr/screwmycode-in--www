import {atom} from 'jotai';

export const bufferedAtom = atom(0);

export const setBufferedAtom = atom(
  null,
  (_get, set, arg) => set(bufferedAtom, arg),
);
