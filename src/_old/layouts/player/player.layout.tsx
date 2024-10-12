import {NextSeo} from 'next-seo';
import React from 'react';
import {AudioComponent} from 'src/_old/components/audio/audio.component';
import {PlayerContextProvider} from 'src/_old/contexts/player-context';
import {usePlayerDocumentTitle} from 'src/_old/hooks/use-player-document-title';
import {PlayerModule} from 'src/_old/modules/player/player.module';

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

      <PlayerContextProvider initialData={{title, image, audio, speed}}>
        <AudioComponent
          url={audio}
          defaultSpeed={speed.toString()}
        />
        <PlayerModule
          title={title}
          artwork={image}
        />
      </PlayerContextProvider>
    </>
  );
}
