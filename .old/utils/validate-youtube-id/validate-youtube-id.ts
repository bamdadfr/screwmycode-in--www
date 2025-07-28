import ytdl from 'ytdl-core';

export function validateYoutubeId(id: string) {
  const isValid = ytdl.validateID(id);
  return {isValid};
}
