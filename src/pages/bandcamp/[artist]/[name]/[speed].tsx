import {type GetServerSideProps} from 'next';
import React from 'react';
import {
  PlayerLayout,
  PlayerLayoutProps,
} from 'src/layouts/player/player.layout';
import {ServerQuery} from 'src/utils/query';
import {Redirect} from 'src/utils/redirect';
import {validateBandcampId} from 'src/utils/validate-bandcamp-id/validate-bandcamp-id';

export default function BandcampPage(props: PlayerLayoutProps) {
  // eslint-disable-next-line react/jsx-props-no-spreading
  return <PlayerLayout {...props} />;
}

export const getServerSideProps: GetServerSideProps<PlayerLayoutProps> = async (
  context,
) => {
  const {artist, name, speed} = context.query;

  if (
    typeof artist !== 'string' ||
    typeof name !== 'string' ||
    typeof speed !== 'string'
  ) {
    return Redirect.home;
  }

  const {isValid} = validateBandcampId(artist, name);

  if (!isValid) {
    return Redirect.home;
  }

  const slug = `${artist}/${name}`;
  const {data, err} = await ServerQuery.audio('bandcamp', slug);

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
