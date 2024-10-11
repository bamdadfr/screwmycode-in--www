import {type GetServerSideProps} from 'next';
import React from 'react';
import {
  PlayerLayout,
  PlayerLayoutProps,
} from 'src/layouts/player/player.layout';
import {Endpoint} from 'src/utils/endpoint';
import {ServerQuery} from 'src/utils/query';
import {Redirect} from 'src/utils/redirect';
import {validateSoundcloudId} from 'src/utils/validate-soundcloud-id/validate-soundcloud-id';

export default function SoundcloudPage(props: PlayerLayoutProps) {
  // eslint-disable-next-line react/jsx-props-no-spreading
  return <PlayerLayout {...props} />;
}

export const getServerSideProps: GetServerSideProps<PlayerLayoutProps> = async (
  context,
) => {
  const {username, trackName, speed} = context.query;

  if (
    typeof username !== 'string' ||
    typeof trackName !== 'string' ||
    typeof speed !== 'string'
  ) {
    return Redirect.home;
  }

  const slug = `${username}/${trackName}`;
  const {isValid} = validateSoundcloudId(slug);

  if (!isValid) {
    return Redirect.home;
  }

  const {data, err} = await ServerQuery.audio(Endpoint.soundcloud, slug);

  if (err) {
    return Redirect.home;
  }

  const props: PlayerLayoutProps = {
    ...data,
    speed: Number(speed),
  };

  return {
    props,
  };
};
