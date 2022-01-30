import {PlayerLayout} from '../../../../layouts/player/player.layout';
import {
  validateSoundcloudId,
} from '../../../../utils/validate-soundcloud-id/validate-soundcloud-id';
import {
  invokeRedirection,
} from '../../../../utils/invoke-redirection/invoke-redirection';
import {apiQuery} from '../../../../utils/api-query/api-query';

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
 * @returns {{TitleWrapper, Image, Url, Speed}} - Server side props
 */
export async function getServerSideProps(context) {
  try {
    const {username, trackName, speed} = context.query;
    const id = `${username}/${trackName}`;

    validateSoundcloudId(id);

    const data = await apiQuery(`/soundcloud/${id}`);

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
