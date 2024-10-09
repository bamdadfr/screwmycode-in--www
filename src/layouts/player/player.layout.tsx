import {NextSeo} from 'next-seo';
import React, {type ReactElement} from 'react';
import {AudioComponent} from 'src/components/audio/audio.component';
import {LoadingComponent} from 'src/components/loading/loading.component';
import {useDynamicTitle} from 'src/hooks/use-dynamic-title';
import {DefaultLayout} from 'src/layouts/default/default.layout';
import {PlayerModule} from 'src/modules/player/player.module';

import {usePlayerLayout} from './hooks/use-player-layout';

export interface PlayerLayoutProps {
  title: string;
  image: string;
  audio: string;
  speed: number;
}

export function PlayerLayout({
  title,
  image,
  audio,
  speed,
}: PlayerLayoutProps): ReactElement {
  const {metaUrl, isLoaded} = usePlayerLayout({
    title,
    speed,
    image,
  });

  const {dynamicTitle} = useDynamicTitle();

  return (
    <>
      <NextSeo
        title={dynamicTitle}
        openGraph={{images: [{url: image}]}}
        canonical={metaUrl}
      />

      <DefaultLayout>
        <AudioComponent url={audio} />
        {!isLoaded ? <LoadingComponent /> : <PlayerModule />}
      </DefaultLayout>
    </>
  );
}
