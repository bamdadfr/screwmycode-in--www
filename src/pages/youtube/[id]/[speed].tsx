import {GetServerSidePropsContext, GetServerSidePropsResult} from 'next';
import {
  PlayerLayout,
  PlayerLayoutProps,
} from '../../../layouts/player/player.layout';
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
 * @param context
 */
export async function getServerSideProps(context: GetServerSidePropsContext): Promise<GetServerSidePropsResult<PlayerLayoutProps>> {
  try {
    const id = context.params.id as string;
    const speed = context.params.speed as string;

    validateYoutubeId(id);

    const data = await apiQuery<PlayerLayoutProps>(`/youtube/${id}`);

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
