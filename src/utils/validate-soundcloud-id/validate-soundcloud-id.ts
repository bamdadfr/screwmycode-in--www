import SoundcloudScraper from 'soundcloud-scraper';

export function validateSoundcloudId(id: string): void {
  const url = `https://soundcloud.com/${id}`;
  const isValid = SoundcloudScraper.Util.validateURL(url);

  if (!isValid) {
    throw new Error('Invalid Soundcloud ID');
  }
}
