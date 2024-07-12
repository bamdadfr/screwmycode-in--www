import {ResizeObserver} from '@juggle/resize-observer';
import {useAtom} from 'jotai';
import Image from 'next/legacy/image';
import React, {ReactElement} from 'react';
import useMeasure from 'react-use-measure';
import {artworkAtom} from 'src/atoms/artwork.atoms';
import {speedAtom} from 'src/atoms/speed.atoms';
import {Container} from 'src/modules/player/components/artwork/artwork.component.styles';

export function NativeComponent(): ReactElement {
  const [artwork] = useAtom(artworkAtom);
  const [speed] = useAtom(speedAtom);
  const [ref, {width}] = useMeasure({polyfill: ResizeObserver});

  return (
    <Container
      ref={ref}
      speed={speed.toString()}
    >
      <Image
        src={artwork || '/'}
        width={width}
        height={width}
        layout="fixed"
        objectFit="cover"
        priority
      />
    </Container>
  );
}
