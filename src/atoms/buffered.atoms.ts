import {atom} from 'jotai';

export const bufferedAtom = atom(0);

export const setBufferedAtom = atom(
  null,
  (get, set, arg) => set(bufferedAtom, arg),
);
