import {GetServerSidePropsContext, GetServerSidePropsResult} from 'next';
import React from 'react';
import {AudioUrlContextProvider} from 'src/contexts/audio-url-context';
import {
  PlayerLayout,
  PlayerLayoutProps,
} from 'src/layouts/player/player.layout';
import {apiQuery} from 'src/utils/api-query/api-query';
import {invokeRedirection} from 'src/utils/invoke-redirection/invoke-redirection';
import {validateBandcampId} from 'src/utils/validate-bandcamp-id/validate-bandcamp-id';

export default function BandcampPage(props: PlayerLayoutProps) {
  return (
    <AudioUrlContextProvider>
      {/* eslint-disable-next-line react/jsx-props-no-spreading */}
      <PlayerLayout {...props} />
    </AudioUrlContextProvider>
  );
}

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
