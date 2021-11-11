import { atom } from 'jotai';

export const isPlayingAtom = atom (false);

export const togglePlayingAtom = atom (
  null,
  (get, set) => set (isPlayingAtom, !get (isPlayingAtom)),
);

export const setPlayAtom = atom (
  null,
  (_get, set) => set (isPlayingAtom, true),
);

export const setPauseAtom = atom (
  null,
  (_get, set) => set (isPlayingAtom, false),
);
