import React, {ReactElement} from 'react';
import {useAtom} from 'jotai';
import useMeasure from 'react-use-measure';
import {ResizeObserver} from '@juggle/resize-observer';
import {artworkAtom} from '../../../../../../atoms/artwork.atoms';
import {speedAtom} from '../../../../../../atoms/speed.atoms';
import {Container} from '../../artwork.component.styles';
import {
  ScrewTextureComponent,
} from '../../../../../../components/screw-texture/screw-texture.component';

export function WebGlComponent(): ReactElement {
  const [artwork] = useAtom(artworkAtom);
  const [speed] = useAtom(speedAtom);
  const [ref, {width}] = useMeasure({polyfill: ResizeObserver});

  return (
    <Container ref={ref} speed={speed.toString()}>
      <ScrewTextureComponent
        image={artwork || '/'}
        dryWet={speed}
        width={width}
      />
    </Container>
  );
}
