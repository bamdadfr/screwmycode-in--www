import {GetServerSidePropsContext, GetServerSidePropsResult} from 'next';
import {
  PlayerLayout,
  PlayerLayoutProps,
} from '../../../../layouts/player/player.layout';
import {invokeRedirection} from '../../../../utils/invoke-redirection/invoke-redirection';
import {apiQuery} from '../../../../utils/api-query/api-query';
import {validateBandcampId} from '../../../../utils/validate-bandcamp-id/validate-bandcamp-id';

export default PlayerLayout;

export async function getServerSideProps(
  context: GetServerSidePropsContext,
): Promise<GetServerSidePropsResult<PlayerLayoutProps>> {
  try {
    const artist = context.query.artist as string;
    const name = context.query.name as string;
    const speed = context.query.speed as string;
    const route = `bandcamp/${artist}/${name}`;
    const data = await apiQuery<PlayerLayoutProps>(route);

    validateBandcampId(artist, name);

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
