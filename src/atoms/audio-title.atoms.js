import {atom} from 'jotai';

export const audioTitleAtom = atom(undefined);

export const setAudioTitleAtom = atom(
  null,
  (get, set, newTitle) => set(audioTitleAtom, newTitle.toString()),
);
