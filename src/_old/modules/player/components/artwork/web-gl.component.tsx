import React, {type ReactElement} from 'react';
import {TextureComponent} from 'src/_old/components/texture/texture.component';
import {usePlayerContext} from 'src/_old/contexts/player-context';
import {Container} from 'src/_old/modules/player/components/artwork/artwork.component.styles';

interface Props {
  width: number;
}

export function WebGlComponent({width}: Props): ReactElement {
  const {speed, artwork} = usePlayerContext();

  return (
    <Container speed={speed.toString()}>
      {artwork && (
        <TextureComponent
          image={artwork}
          dryWet={speed}
          width={width}
        />
      )}
    </Container>
  );
}
