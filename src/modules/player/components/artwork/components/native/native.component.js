import React from 'react';
import Image from 'next/image';
import {useAtom} from 'jotai';
import useMeasure from 'react-use-measure';
import {ResizeObserver} from '@juggle/resize-observer';
import {artworkAtom} from '../../../../../../atoms/artwork.atoms';
import {speedAtom} from '../../../../../../atoms/speed.atoms';
import {Container} from '../../artwork.component.styles';

/**
 * @returns {React.ReactElement} - React Component
 */
export function NativeComponent() {
  const [artwork] = useAtom(artworkAtom);
  const [speed] = useAtom(speedAtom);
  const [ref, {width}] = useMeasure({polyfill: ResizeObserver});

  return (
    <Container ref={ref} speed={speed}>
      <Image
        src={artwork || '/'}
        width={width}
        height={width}
        priority="true"
        layout="fixed"
        objectFit="cover"
      />
    </Container>
  );
}
