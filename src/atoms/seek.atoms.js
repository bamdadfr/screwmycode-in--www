import {atom} from 'jotai';

export const seekAtom = atom(0);

export const setSeekAtom = atom(
  null,
  (get, set, arg) => set(seekAtom, arg),
);
