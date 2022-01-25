import React from 'react';
import PropTypes from 'prop-types';
import {isFirefox} from 'react-device-detect';
import {NativeComponent} from './components/native/native.component';
import {HowlerComponent} from './components/howler/howler.component';
import {useAudioModule} from './hooks/use-audio-module';
import {Invisible} from './audio.module.styles';

const propTypes = {
  url: PropTypes.string.isRequired,
};

/**
 * Component to play audio files
 *
 * @typedef {string} Url - The url of the audio file
 * @param {{Url}} props - The props of the component
 * @returns {React.ReactElement} - Audio component
 */
export function AudioModule({url}) {
  useAudioModule();

  return (
    <>
      <Invisible>
        {isFirefox
          ? <NativeComponent url={url} />
          : <HowlerComponent url={url} />
        }
      </Invisible>
    </>
  );
}

AudioModule.propTypes = propTypes;
