import {NextSeo} from 'next-seo';
import React from 'react';
import {AudioComponent} from 'src/components/audio/audio.component';
import {PlayerContextProvider} from 'src/contexts/player-context';
import {usePlayerDocumentTitle} from 'src/hooks/use-player-document-title';
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
  const {canonical} = usePlayerLayout();
  const dynamicTitle = usePlayerDocumentTitle(title);

  return (
    <>
      <NextSeo
        title={dynamicTitle}
        openGraph={{images: [{url: image}]}}
        canonical={canonical}
      />

      <DefaultLayout>
        <PlayerContextProvider>
          <AudioComponent
            url={audio}
            defaultSpeed={speed.toString()}
          />
          <PlayerModule
            title={title}
            artwork={image}
          />
        </PlayerContextProvider>
      </DefaultLayout>
    </>
  );
}
