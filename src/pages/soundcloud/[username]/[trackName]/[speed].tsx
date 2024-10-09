import {GetServerSidePropsContext, GetServerSidePropsResult} from 'next';
import React from 'react';
import {
  PlayerLayout,
  PlayerLayoutProps,
} from 'src/layouts/player/player.layout';
import {apiQuery} from 'src/utils/api-query/api-query';
import {invokeRedirection} from 'src/utils/invoke-redirection/invoke-redirection';
import {validateSoundcloudId} from 'src/utils/validate-soundcloud-id/validate-soundcloud-id';

export default function SoundcloudPage(props: PlayerLayoutProps) {
  // eslint-disable-next-line react/jsx-props-no-spreading
  return <PlayerLayout {...props} />;
}

export async function getServerSideProps(
  context: GetServerSidePropsContext,
): Promise<GetServerSidePropsResult<PlayerLayoutProps>> {
  try {
    const {username, trackName} = context.query;
    const speed = context.query.speed as string;

    const id = `${username}/${trackName}`;

    validateSoundcloudId(id);

    const data = await apiQuery<PlayerLayoutProps>(`soundcloud/${id}`);

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
