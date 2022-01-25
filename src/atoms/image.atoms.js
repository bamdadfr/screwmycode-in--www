import {atom} from 'jotai';

export const imageAtom = atom(undefined);

export const setImageAtom = atom(
  null,
  (get, set, artwork) => set(imageAtom, artwork),
);
