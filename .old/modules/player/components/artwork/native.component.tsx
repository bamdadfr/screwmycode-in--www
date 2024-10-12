import Image from 'next/image';
import React, {type ReactElement} from 'react';
import {usePlayerContext} from 'src/_old/contexts/player-context';
import {Container} from 'src/_old/modules/player/components/artwork/artwork.component.styles';

interface Props {
  width: number;
}

export function NativeComponent({width}: Props): ReactElement {
  const {speed, artwork} = usePlayerContext();

  return (
    <Container speed={speed.toString()}>
      {artwork && (
        <Image
          src={artwork}
          width={width}
          height={width}
          alt="cover"
        />
      )}
    </Container>
  );
}
