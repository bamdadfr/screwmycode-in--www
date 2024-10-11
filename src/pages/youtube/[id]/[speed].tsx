import {type GetServerSideProps} from 'next';
import React from 'react';
import {
  PlayerLayout,
  PlayerLayoutProps,
} from 'src/layouts/player/player.layout';
import {ServerQuery} from 'src/utils/query';
import {Redirect} from 'src/utils/redirect';
import {validateYoutubeId} from 'src/utils/validate-youtube-id/validate-youtube-id';

export default function YoutubePage(props: PlayerLayoutProps) {
  // eslint-disable-next-line react/jsx-props-no-spreading
  return <PlayerLayout {...props} />;
}

export const getServerSideProps: GetServerSideProps<PlayerLayoutProps> = async (
  context,
) => {
  const {id, speed} = context.query;

  if (typeof id !== 'string' || typeof speed !== 'string') {
    return Redirect.home;
  }

  const {isValid} = validateYoutubeId(id);

  if (!isValid) {
    return Redirect.home;
  }

  const {data, err} = await ServerQuery.audio('youtube', id);

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
