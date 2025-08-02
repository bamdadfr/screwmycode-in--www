import {atom} from 'jotai';
import {atomWithStorage} from 'jotai/utils';
import {LOCAL_STORAGE_KEY} from 'src/constants';

export const audioDomReferenceAtom = atom<HTMLAudioElement | null>(null);
export const audioIsPlayingAtom = atom<boolean>(false);
export const audioIsRepeatAtom = atom<boolean>(true);
export const audioDurationAtom = atom<number>(0);
export const audioProgressAtom = atom<number>(0);
export const audioBufferAtom = atom<number>(0);
export const audioSeekAtom = atom<number | null>(null);
export const audioSourceAtom = atom<string>('');
export const audioIsLoadingAtom = atom<boolean>(false);
export const audioIsErrorAtom = atom<boolean>(false);

export const audioSpeedAtom = atomWithStorage<number>(
  LOCAL_STORAGE_KEY.enum.AUDIO_SPEED,
  0.84,
);

export const audioVolumeAtom = atomWithStorage<number>(
  LOCAL_STORAGE_KEY.enum.AUDIO_VOLUME,
  0.7,
);
