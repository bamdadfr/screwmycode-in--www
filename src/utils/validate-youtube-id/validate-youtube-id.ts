import ytdl from 'ytdl-core';

export function validateYoutubeId(id: string): void {
  const isValid = ytdl.validateID(id);

  if (!isValid) {
    throw new Error('Invalid YouTube ID');
  }
}
