import axios from 'axios';
import {
  getYoutubeThumbnail,
} from '../../../utils/get-youtube-thumbnail/get-youtube-thumbnail';
import {PlayerLayout} from '../../../layouts/player/player.layout';

/**
 * Youtube page
 * Path: /youtube/[id]/[speed]
 */
export default PlayerLayout;

/**
 * Youtube page server side props
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

  const request = await axios.get(`https://api.screwmycode.in/youtube/${id}`);
  const response = request.data;

  if (!response.success) {
    return redirect;
  }

  props.title = response.data.title;
  props.image = getYoutubeThumbnail(id);
  props.url = response.data.url;
  props.speed = parseFloat(speed) || 1;

  return {props};
}
