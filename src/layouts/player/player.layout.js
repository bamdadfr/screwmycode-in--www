import React from 'react';
import Head from 'next/head';
import PropTypes from 'prop-types';
import {
  IndicatorsComponent,
} from '../../components/indicators/indicators.component';
import {LoadingComponent} from '../../components/loading/loading.component';
import {MetaComponent} from '../../components/meta/meta.component';
import {
  PlayerSpeedComponent,
} from '../../components/player-speed/player-speed.component';
import {DefaultLayout} from '../default/default.layout';
import {AudioModule} from '../../modules/audio/audio.module';
import {PlayerModule} from '../../modules/player/player.module';
import {usePlayerLayout} from './hooks/use-player-layout';

const propTypes = {
  title: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  speed: PropTypes.number.isRequired,
};

/**
 * Layout for the player page
 *
 * @param {object} props - Component props
 * @param {string} props.title - Title of the track
 * @param {string} props.image - Image of the track
 * @param {string} props.url - URL of the track
 * @param {number} props.speed - Speed of the track
 * @returns {React.ReactElement} - Rendered component
 */
export function PlayerLayout({
  title,
  image,
  url,
  speed,
}) {
  const {
    metaDescription,
    metaUrl,
    isLoaded,
  } = usePlayerLayout({title, speed, image});

  return (
    <>
      <Head>
        <title>{metaDescription}</title>
      </Head>
      <MetaComponent
        customTitle
        description={metaDescription}
        image={image}
        url={metaUrl}
      />
      <DefaultLayout customMeta>
        <AudioModule url={url} />
        {!isLoaded
          ? <>
            <LoadingComponent />
          </>
          : <>
            <PlayerModule />
            <IndicatorsComponent />
            <PlayerSpeedComponent />
          </>
        }
      </DefaultLayout>
    </>
  );
}

PlayerLayout.propTypes = propTypes;
