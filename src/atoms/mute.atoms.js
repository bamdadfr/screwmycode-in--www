import { atom } from 'jotai';

export const isMutedAtom = atom (false);

export const toggleMuteAtom = atom (
  null,
  (get, set) => set (isMutedAtom, !get (isMutedAtom)),
);
