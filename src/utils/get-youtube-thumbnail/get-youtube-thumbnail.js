export const prefix = 'https://i.ytimg.com/vi/';

export const suffix = '/maxresdefault.jpg';

/**
 * Get the thumbnail of a YouTube video
 *
 * @param {string} id - The video ID
 * @returns {string} - The thumbnail URL
 */
export function getYoutubeThumbnail (id) {
  if (typeof id !== 'string') {
    throw new Error ('id is not a string');
  }

  return `${prefix}${id}${suffix}`;
}
