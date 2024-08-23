import {useAtom} from 'jotai';
import Image from 'next/image';
import React, {ReactElement} from 'react';
import {artworkAtom} from 'src/atoms/artwork.atoms';
import {speedAtom} from 'src/atoms/speed.atoms';
import {Container} from 'src/modules/player/components/artwork/artwork.component.styles';

interface Props {
  width: number;
}

export function NativeComponent({width}: Props): ReactElement {
  const [artwork] = useAtom(artworkAtom);
  const [speed] = useAtom(speedAtom);

  return (
    <Container speed={speed.toString()}>
      <Image
        src={artwork || '/'}
        width={width}
        height={width}
        alt="cover"
      />
    </Container>
  );
}
