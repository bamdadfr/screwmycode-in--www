import React, {ReactElement} from 'react';
import {AudioComponent} from 'src/components/audio/audio.component';
import {LoadingComponent} from 'src/components/loading/loading.component';
import {MetaComponent} from 'src/components/meta/meta.component';
import {DefaultLayout} from 'src/layouts/default/default.layout';
import {PlayerModule} from 'src/modules/player/player.module';

import {usePlayerLayout} from './hooks/use-player-layout';

export interface PlayerLayoutProps {
  title: string;
  image: string;
  audio: string;
  speed: number;
}

/**
 * Layout for the player page
 */
export function PlayerLayout({
  title,
  image,
  audio,
  speed,
}: PlayerLayoutProps): ReactElement {
  const {metaDescription, metaUrl, isLoaded} = usePlayerLayout({
    title,
    speed,
    image,
  });

  return (
    <>
      <MetaComponent
        description={metaDescription}
        image={image}
        url={metaUrl}
      />
      <DefaultLayout customMeta>
        <AudioComponent url={audio} />
        {!isLoaded ? <LoadingComponent /> : <PlayerModule />}
      </DefaultLayout>
    </>
  );
}
