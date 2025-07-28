import {API_BASE_URL} from 'src/constants';
import {type AudioDto, type AudioType} from 'src/utils/dtos';

export const fetchAudio = async (type: AudioType, slug: string) => {
  const url = `${API_BASE_URL}/${type}/${slug}`;
  const response = await fetch(url);
  return (await response.json()) as AudioDto;
};

export const fetchAudioNew = async (url: string) => {
  console.log(url);
  const response = await fetch(url);
  return (await response.json()) as AudioDto;
};
