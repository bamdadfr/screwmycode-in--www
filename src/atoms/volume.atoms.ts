import {atom} from 'jotai';

export const volumeAtom = atom(0.7);

export const setVolumeAtom = atom(
  null,
  (get, set, arg) => set(volumeAtom, parseFloat(arg)),
);
