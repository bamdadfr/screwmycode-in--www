import React from 'react';
import {isDesktop} from 'react-device-detect';
import {WebGlComponent} from './components/web-gl/web-gl.component';
import {NativeComponent} from './components/native/native.component';

/**
 * @returns {React.ReactElement} react component
 */
export function ArtworkComponent() {
  return (
    <>
      {
        isDesktop
          ? <WebGlComponent />
          : <NativeComponent />
      }
    </>
  );
}
