import React from 'react';
import {useAtom} from 'jotai';
import {WebGlComponent} from './components/web-gl/web-gl.component';
import {NativeComponent} from './components/native/native.component';
import {
  isWebGlAvailableAtom,
} from '../../../../atoms/is-web-gl-available.atoms';

/**
 * @returns {React.ReactElement} react component
 */
export function ArtworkComponent() {
  const [isWebGlAvailable] = useAtom(isWebGlAvailableAtom);
  return (
    <>
      {
        isWebGlAvailable
          ? <WebGlComponent />
          : <NativeComponent />
      }
    </>
  );
}
