import ky from 'ky';
import {PlayerLayout} from '../../../layouts/player/player.layout';

/**
 * YouTube page
 * Path: /youtube/[id]/[speed]
 */
export default PlayerLayout;

/**
 * YouTube page server side props
 *
 * @param {object} context - Next.js context object
 * @typedef {string} Title - Page title
 * @typedef {string} Image - Page image
 * @typedef {string} Url - Page URL
 * @typedef {number} Speed - Playback speed
 * @returns {{Title, Image, Url, Speed}} - Server side props
 */
export async function getServerSideProps(context) {
  const {id, speed} = context.params;
  const props = {};
  const redirect = {'redirect': {'destination': '/', 'permanent': false}};
  const ytdl = (await import('ytdl-core')).default;
  const isValid = ytdl.validateID(id);

  if (!isValid) {
    return redirect;
  }

  const response = await ky.get(`https://api.screwmycode.in/youtube/${id}`).json();

  if (!response.success) {
    return redirect;
  }

  props.title = response.data.title;
  props.image = `https://api.screwmycode.in/youtube/${id}/image`;
  props.url = response.data.url;
  props.speed = parseFloat(speed) || 1;
  props.provider = 'youtube';
  props.youtubeId = id;

  return {props};
}
