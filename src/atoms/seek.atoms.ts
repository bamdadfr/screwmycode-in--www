import {atom} from 'jotai';

export const seekAtom = atom(0);

export const setSeekAtom = atom(
  null,
  (_get, set, arg) => set(seekAtom, arg),
);
