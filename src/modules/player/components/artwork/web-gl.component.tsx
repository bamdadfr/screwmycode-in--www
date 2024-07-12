import {ResizeObserver} from '@juggle/resize-observer';
import {useAtom} from 'jotai';
import React, {ReactElement} from 'react';
import useMeasure from 'react-use-measure';
import {artworkAtom} from 'src/atoms/artwork.atoms';
import {speedAtom} from 'src/atoms/speed.atoms';
import {ScrewTextureComponent} from 'src/components/screw-texture/screw-texture.component';
import {Container} from 'src/modules/player/components/artwork/artwork.component.styles';

export function WebGlComponent(): ReactElement {
  const [artwork] = useAtom(artworkAtom);
  const [speed] = useAtom(speedAtom);
  const [ref, {width}] = useMeasure({polyfill: ResizeObserver});

  return (
    <Container
      ref={ref}
      speed={speed.toString()}
    >
      <ScrewTextureComponent
        image={artwork || '/'}
        dryWet={speed}
        width={width}
      />
    </Container>
  );
}
