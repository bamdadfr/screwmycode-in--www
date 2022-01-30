import React from 'react';
import PropTypes from 'prop-types';
import {LoadingComponent} from '../../components/loading/loading.component';
import {MetaComponent} from '../../components/meta/meta.component';
import {DefaultLayout} from '../default/default.layout';
import {AudioModule} from '../../modules/audio/audio.module';
import {PlayerModule} from '../../modules/player/player.module';
import {usePlayerLayout} from './hooks/use-player-layout';

const propTypes = {
  title: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  audio: PropTypes.string.isRequired,
  speed: PropTypes.number.isRequired,
};

/**
 * Layout for the player page
 *
 * @param {object} props - Component props
 * @param {string} props.title - TitleWrapper of the track
 * @param {string} props.image - Image of the track
 * @param {string} props.audio - URL of the track
 * @param {number} [props.speed] - Speed of the track
 * @returns {React.ReactElement} - Rendered component
 */
export function PlayerLayout({
  title,
  image,
  audio,
  speed = 1,
}) {
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

PlayerLayout.propTypes = propTypes;
