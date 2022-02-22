import React, {ReactElement} from 'react';
import {NativeComponent} from './components/native/native.component';
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
        <NativeComponent url={url} />
      </Invisible>
    </>
  );
}
