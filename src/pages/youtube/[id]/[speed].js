import {PlayerLayout} from '../../../layouts/player/player.layout';
import {
  invokeRedirection,
} from '../../../utils/invoke-redirection/invoke-redirection';
import {apiQuery} from '../../../utils/api-query/api-query';
import {
  validateYoutubeId,
} from '../../../utils/validate-youtube-id/validate-youtube-id';

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
 * @returns {{TitleWrapper, Image, Url, Speed}} - Server side props
 */
export async function getServerSideProps(context) {
  try {
    const {id, speed} = context.params;

    validateYoutubeId(id);

    const data = await apiQuery(`/youtube/${id}`);

    const props = {};
    props.title = data.title;
    props.image = data.image;
    props.audio = data.audio;
    props.speed = parseFloat(speed) || 1;

    return {props};
  } catch {
    return invokeRedirection();
  }
}
