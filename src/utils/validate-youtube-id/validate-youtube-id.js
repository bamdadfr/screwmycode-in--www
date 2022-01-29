import ytdl from 'ytdl-core';

/**
 * @param {string} id - The YouTube video ID.
 */
export function validateYoutubeId(id) {
  const isValid = ytdl.validateID(id);

  if (!isValid) {
    throw new Error('Invalid YouTube ID');
  }
}
