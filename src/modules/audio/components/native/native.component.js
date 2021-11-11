import React from 'react';
import PropTypes from 'prop-types';
import { useNativeComponent } from './hooks/use-native-component';

const propTypes = {
  url: PropTypes.string.isRequired,
};

/**
 * Component to render native audio player
 *
 * @param {object} props - Component props
 * @param {string} props.url - URL of the audio file
 * @returns {React.ReactElement} - Rendered component
 */
export function NativeComponent ({ url }) {
  const { ref } = useNativeComponent (url);

  return (
    <>
      <audio
        ref={ref}
        aria-label="player"
        // controls
      >
        <track kind="captions" />
      </audio>
    </>
  );
}

NativeComponent.propTypes = propTypes;
