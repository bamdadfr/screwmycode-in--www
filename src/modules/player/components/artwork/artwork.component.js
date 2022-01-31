import React from 'react';
import {useAtom} from 'jotai';
import {WebGlComponent} from './components/web-gl/web-gl.component';
import {NativeComponent} from './components/native/native.component';
import {
  isWebGlAvailableAtom,
} from '../../../../atoms/is-web-gl-available.atoms';
import {artworkAtom} from '../../../../atoms/artwork.atoms';
import {useRemoteAccessible} from '../../../../hooks/use-remote-accessible';

/**
 * @returns {React.ReactElement} react component
 */
export function ArtworkComponent() {
  const [isWebGlAvailable] = useAtom(isWebGlAvailableAtom);
  const [artwork] = useAtom(artworkAtom);
  const isAccessible = useRemoteAccessible(artwork);

  return (
    <>
      {
        isAccessible &&
        (
          isWebGlAvailable
            ? <WebGlComponent />
            : <NativeComponent />
        )
      }
    </>
  );
}
