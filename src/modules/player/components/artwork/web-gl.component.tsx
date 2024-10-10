import React, {type ReactElement} from 'react';
import {TextureComponent} from 'src/components/texture/texture.component';
import {usePlayerContext} from 'src/contexts/player-context';
import {Container} from 'src/modules/player/components/artwork/artwork.component.styles';

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
