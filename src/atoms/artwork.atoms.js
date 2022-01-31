import {atom} from 'jotai';

export const artworkAtom = atom(undefined);

export const setArtworkAtom = atom(
  null,
  (get, set, artwork) => set(artworkAtom, artwork),
);
