import {atom} from 'jotai';

export const isRepeatingAtom = atom(true);

export const toggleRepeatingAtom = atom(
  null,
  (get, set) => set(isRepeatingAtom, !get(isRepeatingAtom)),
);
