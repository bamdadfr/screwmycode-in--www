import {PlayerLayout} from '../../../../layouts/player/player.layout';

/**
 * SoundCloud page
 * Path: /soundcloud/[user]/[id]/[speed]
 */
export default PlayerLayout;

/**
 * Soundcloud page server side props
 *
 * @param {object} context - Next.js context object
 * @typedef {string} Title - Page title
 * @typedef {string} Image - Page image
 * @typedef {string} Url - Page URL
 * @typedef {number} Speed - Playback speed
 * @returns {{Title, Image, Url, Speed}} - Server side props
 */
export async function getServerSideProps(context) {
  const {user, id, speed} = context.query;
  const props = {};
  const SoundcloudScraper = (await import('soundcloud-scraper')).default;
  const scraper = new SoundcloudScraper.Client();
  const soundcloudUrl = `https://soundcloud.com/${user}/${id}`;
  const isValid = SoundcloudScraper.Util.validateURL(soundcloudUrl);

  if (!isValid) {
    return {redirect: {destination: '/', permanent: false}};
  }

  const info = await scraper.getSongInfo(soundcloudUrl);
  const audioUrl = await SoundcloudScraper.Util.fetchSongStreamURL(info.trackURL, undefined);

  props.title = info.title;
  props.image = info.thumbnail;
  props.url = audioUrl;
  props.speed = parseFloat(speed) || 1;
  props.provider = 'soundcloud';

  return {props};
}
