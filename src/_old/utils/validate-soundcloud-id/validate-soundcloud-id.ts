import SoundcloudScraper from 'soundcloud-scraper';

export function validateSoundcloudId(id: string) {
  const url = `https://soundcloud.com/${id}`;
  const isValid = SoundcloudScraper.Util.validateURL(url);
  return {isValid};
}
