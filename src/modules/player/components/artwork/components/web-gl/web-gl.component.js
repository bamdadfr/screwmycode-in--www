import React from 'react';
import {useAtom} from 'jotai';
import useMeasure from 'react-use-measure';
import {ResizeObserver} from '@juggle/resize-observer';
import {artworkAtom} from '../../../../../../atoms/artwork.atoms';
import {speedAtom} from '../../../../../../atoms/speed.atoms';
import {Container} from '../../artwork.component.styles';
import {
  ScrewTextureComponent,
} from '../../../../../../components/screw-texture/screw-texture.component';

/**
 * @returns {React.ReactElement} react component
 */
export function WebGlComponent() {
  const [artwork] = useAtom(artworkAtom);
  const [speed] = useAtom(speedAtom);
  const [ref, {width}] = useMeasure({polyfill: ResizeObserver});

  return (
    <Container ref={ref} speed={speed}>
      <ScrewTextureComponent
        image={artwork || '/'}
        dryWet={speed}
        width={width}
      />
    </Container>
  );
}
