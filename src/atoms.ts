import {atom} from 'jotai';
import {atomWithStorage} from 'jotai/utils';
import {type AudioDto, type AudioType} from 'src/utils/dtos';

enum StorageKey {
  AudioVolume = 'audio/volume',
  AudioSpeed = 'audio/speed',
  AudioLikes = 'audio/likes',
  VisualiserScale = 'visualiser/scale',
}

export const isNavOpenAtom = atom(true);
export const toggleNavOpenAtom = atom(null, (get, set) =>
  set(isNavOpenAtom, !get(isNavOpenAtom)),
);
export const isMainDrawerOpenAtom = atom(false);
export const toggleMainDrawerAtom = atom(null, (get, set) =>
  set(isMainDrawerOpenAtom, !get(isMainDrawerOpenAtom)),
);
export const isMainDrawerHoverAtom = atom(false);
export const audioRefAtom = atom<HTMLAudioElement | null>(null);
export const audioArtworkAtom = atom<string | null>(null);
export const audioSrcAtom = atom<string | null>(null);
export const audioRepeatingAtom = atom<boolean>(true);
export const audioDurationAtom = atom<number>(0);
export const audioProgressAtom = atom<number>(0);
export const audioBufferAtom = atom<number>(0);
export const audioSeekAtom = atom<number | null>(null);
export const audioVolumeAtom = atomWithStorage<number>(
  StorageKey.AudioVolume,
  0.7,
);
export const audioSpeedAtom = atomWithStorage<number>(
  StorageKey.AudioSpeed,
  0.84,
);
export const audioPlayingAtom = atom<boolean>(false);
export const audioToggleAtom = atom(null, (get, set) =>
  set(audioPlayingAtom, !get(audioPlayingAtom)),
);
export const audioTypeAtom = atom<AudioType | null>(null);
export const audioSlugAtom = atom<string | null>(null);
export const visualiserScaleAtom = atomWithStorage<number>(
  StorageKey.VisualiserScale,
  0.4,
);
export const textureResettingAtom = atom<boolean>(false);
export const audioTitleAtom = atom<null | string>(null);

export const audioLikesAtom = atomWithStorage<AudioDto[]>(
  StorageKey.AudioLikes,
  [],
);

export interface EnrichedAudio extends AudioDto {
  speed: {
    values: number[];
    average: number | null;
  };
}

export const audioAtom = atom<EnrichedAudio | null>(null);
export const audiosAtom = atom<EnrichedAudio[]>([]);
