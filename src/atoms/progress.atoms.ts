import {atom} from 'jotai';

export const progressAtom = atom(0);

export const setProgressAtom = atom(
  null,
  (_get, set, arg) => set(progressAtom, arg),
);
