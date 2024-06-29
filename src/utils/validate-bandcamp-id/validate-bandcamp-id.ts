export function validateBandcampId(artist: string, name: string): void {
  const url = `https://${artist}.bandcamp.com/track/${name}`;
  const regex = /(https?:\/\/)?([\d|\w]+)\.bandcamp\.com\/track\/?.*/gm;
  const isMatch = regex.test(url);

  if (!isMatch) {
    throw new Error('Invalid Bandcamp ID');
  }
}
