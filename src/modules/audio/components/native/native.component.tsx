import React, {ReactElement} from 'react';
import {useNativeComponent} from './hooks/use-native-component';

interface NativeComponentProps {
  url: string;
}

/**
 * Component to render native audio player
 */
export function NativeComponent({url}: NativeComponentProps): ReactElement {
  const {ref} = useNativeComponent(url);

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
