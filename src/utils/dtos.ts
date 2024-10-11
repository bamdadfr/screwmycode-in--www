export type AudioType = 'youtube' | 'soundcloud' | 'bandcamp';

export interface HomeDto {
  version: string;
}

export interface TopDto {
  slug: string;
  title: string;
  hits: number;
  type: AudioType;
  image: string;
}

export interface LatestDto extends TopDto {
  updated_at: string;
}

export interface AudioDto {
  slug: string;
  type: AudioType;
  hits: number;
  title: string;
  image: string;
  audio: string;
}
