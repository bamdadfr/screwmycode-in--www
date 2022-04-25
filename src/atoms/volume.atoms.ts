import {atom} from 'jotai';

export const volumeAtom = atom(0.7);

export const setVolumeAtom = atom(
  null,
  (_get, set, v: number) => set(volumeAtom, v),
);
