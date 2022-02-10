import {atom} from 'jotai';

export const volumeAtom = atom(0.7);

export const setVolumeAtom = atom(
  null,
  (get, set, v: number) => set(volumeAtom, v),
);
