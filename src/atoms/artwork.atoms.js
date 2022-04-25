import {atom} from 'jotai';

export const artworkAtom = atom(undefined);

export const setArtworkAtom = atom(
  null,
  (_get, set, artwork) => set(artworkAtom, artwork),
);
