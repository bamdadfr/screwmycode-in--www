import {NextSeo} from 'next-seo';
import React from 'react';
import {AudioComponent} from 'src/components/audio/audio.component';
import {LoadingComponent} from 'src/components/loading/loading.component';
import {AudioRefContextProvider} from 'src/contexts/audio-ref-context';
import {DefaultLayout} from 'src/layouts/default/default.layout';
import {PlayerModule} from 'src/modules/player/player.module';

import {usePlayerLayout} from './hooks/use-player-layout';

export interface PlayerLayoutProps {
  title: string;
  image: string;
  audio: string;
  speed: number;
}

export function PlayerLayout({title, image, audio, speed}: PlayerLayoutProps) {
  const {metaUrl, isLoaded} = usePlayerLayout({title, image, audio, speed});

  return (
    <>
      <NextSeo
        openGraph={{images: [{url: image}]}}
        canonical={metaUrl}
      />

      <DefaultLayout>
        <AudioRefContextProvider>
          <AudioComponent />
          {!isLoaded ? <LoadingComponent /> : <PlayerModule />}
        </AudioRefContextProvider>
      </DefaultLayout>
    </>
  );
}
