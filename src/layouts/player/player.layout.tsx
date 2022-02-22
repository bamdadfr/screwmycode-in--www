import React, {ReactElement} from 'react';
import {MetaComponent} from '../../components/meta/meta.component';
import {DefaultLayout} from '../default/default.layout';
import {AudioComponent} from '../../components/audio/audio.component';
import {PlayerModule} from '../../modules/player/player.module';
import {usePlayerLayout} from './hooks/use-player-layout';
import {LoadingComponent} from '../../components/loading/loading.component';

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
        <AudioComponent url={audio} />
        {
          !isLoaded
            ? <LoadingComponent />
            : <PlayerModule />
        }
      </DefaultLayout>
    </>
  );
}
