import {atom} from 'jotai';
import {type AudioDto} from 'src/utils/dtos';

export interface EnrichedAudio extends AudioDto {
  speed: {
    values: number[];
    average: number | null;
  };
}

export const audioAtom = atom<EnrichedAudio | null>(null);
export const audiosAtom = atom<EnrichedAudio[]>([]);
