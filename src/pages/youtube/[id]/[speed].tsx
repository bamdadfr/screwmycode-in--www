import {GetServerSidePropsContext, GetServerSidePropsResult} from 'next';
import {PlayerLayout, PlayerLayoutProps} from 'src/layouts/player/player.layout';
import {invokeRedirection} from 'src/utils/invoke-redirection/invoke-redirection';
import {apiQuery} from 'src/utils/api-query/api-query';
import {validateYoutubeId} from 'src/utils/validate-youtube-id/validate-youtube-id';

/**
 * YouTube page
 * Path: /youtube/[id]/[speed]
 */
export default PlayerLayout;

/**
 * YouTube page server side props
 */
export async function getServerSideProps(
  context: GetServerSidePropsContext,
): Promise<GetServerSidePropsResult<PlayerLayoutProps>> {
  try {
    const id = context.params?.id as string;
    const speed = context.params?.speed as string;

    validateYoutubeId(id);

    const data = await apiQuery<PlayerLayoutProps>(`youtube/${id}`);

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
