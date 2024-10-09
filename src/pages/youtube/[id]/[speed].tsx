import {GetServerSidePropsContext, GetServerSidePropsResult} from 'next';
import React from 'react';
import {AudioUrlContextProvider} from 'src/contexts/audio-url-context';
import {
  PlayerLayout,
  PlayerLayoutProps,
} from 'src/layouts/player/player.layout';
import {apiQuery} from 'src/utils/api-query/api-query';
import {invokeRedirection} from 'src/utils/invoke-redirection/invoke-redirection';
import {validateYoutubeId} from 'src/utils/validate-youtube-id/validate-youtube-id';

export default function YoutubePage(props: PlayerLayoutProps) {
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
