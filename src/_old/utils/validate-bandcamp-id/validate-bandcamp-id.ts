export function validateBandcampId(artist: string, name: string) {
  const url = `https://${artist}.bandcamp.com/track/${name}`;
  const regex = /(https?:\/\/)?([\d|\w]+)\.bandcamp\.com\/track\/?.*/gm;
  const isValid = regex.test(url);
  return {isValid};
}
