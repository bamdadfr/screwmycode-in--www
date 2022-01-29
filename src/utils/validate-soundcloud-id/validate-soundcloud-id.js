import SoundcloudScraper from 'soundcloud-scraper';

/**
 * @param {string} id - Soundcloud username + track name
 */
export function validateSoundcloudId(id) {
  const url = `https://soundcloud.com/${id}`;
  const isValid = SoundcloudScraper.Util.validateURL(url);

  if (!isValid) {
    throw new Error('Invalid Soundcloud ID');
  }
}
