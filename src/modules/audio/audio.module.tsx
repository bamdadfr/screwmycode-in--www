import React, {ReactElement} from 'react';
import {isFirefox} from 'react-device-detect';
import {NativeComponent} from './components/native/native.component';
import {HowlerComponent} from './components/howler/howler.component';
import {useAudioModule} from './hooks/use-audio-module';
import {Invisible} from './audio.module.styles';

interface AudioModuleProps {
  url: string;
}

/**
 * Component to play audio files
 */
export function AudioModule({url}: AudioModuleProps): ReactElement {
  useAudioModule();

  return (
    <>
      <Invisible>
        {
          isFirefox
            ? <NativeComponent url={url} />
            : <HowlerComponent url={url} />
        }
      </Invisible>
    </>
  );
}
