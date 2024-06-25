import {GetServerSidePropsContext, GetServerSidePropsResult} from 'next';
import {
  PlayerLayout,
  PlayerLayoutProps,
} from '../../../../layouts/player/player.layout';
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
 * @param context
 */
export async function getServerSideProps(context: GetServerSidePropsContext): Promise<GetServerSidePropsResult<PlayerLayoutProps>> {
  try {
    const {username, trackName} = context.query;
    const speed = context.query.speed as string;

    const id = `${username}/${trackName}`;

    validateSoundcloudId(id);

    const data = await apiQuery<PlayerLayoutProps>(`/soundcloud/${id}`);

    const props: PlayerLayoutProps = {
      title: data.title,
      image: data.image,
      audio: data.audio,
      speed: parseFloat(speed) || 1,
    };

    return {props};
  } catch {
    return invokeRedirection();
  }
}
