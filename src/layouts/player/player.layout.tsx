import React, {ReactElement} from 'react';
import {LoadingComponent} from '../../components/loading/loading.component';
import {MetaComponent} from '../../components/meta/meta.component';
import {DefaultLayout} from '../default/default.layout';
import {AudioModule} from '../../modules/audio/audio.module';
import {PlayerModule} from '../../modules/player/player.module';
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
  const {
    metaDescription,
    metaUrl,
    isLoaded,
  } = usePlayerLayout({title, speed, image});

  return (
    <>
      <MetaComponent
        description={metaDescription}
        image={image}
        url={metaUrl}
      />
      <DefaultLayout customMeta>
        <AudioModule url={audio} />
        {
          !isLoaded
            ? <LoadingComponent />
            : <PlayerModule />
        }
      </DefaultLayout>
    </>
  );
}
