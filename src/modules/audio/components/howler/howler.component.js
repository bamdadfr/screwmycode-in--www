import React from 'react';
import PropTypes from 'prop-types';
import ReactHowler from 'react-howler';
import {useHowlerComponent} from './hooks/use-howler-component';

const propTypes = {
  url: PropTypes.string.isRequired,
};

/**
 * Component to play audio files using the Howler library
 *
 * @param {object} props - Component props
 * @param {string} props.url - URL of the audio file
 * @returns {React.ReactElement} - Howler component
 */
export function HowlerComponent({url}) {
  const {
    ref,
    setLoaded,
    isPlaying,
    isRepeating,
    speed,
    volume,
    handleEnd,
  } = useHowlerComponent();

  return (
    <>
      <ReactHowler
        ref={ref}
        src={url}
        playing={isPlaying}
        rate={speed}
        volume={volume}
        loop={isRepeating}
        format={['mp3']}
        onLoad={() => setLoaded(true)}
        onEnd={handleEnd}
      />
    </>
  );
}

HowlerComponent.propTypes = propTypes;
