import {atom} from 'jotai';

export const durationAtom = atom(0);

export const setDurationAtom = atom(
  null,
  (_get, set, arg) => set(durationAtom, arg),
);
