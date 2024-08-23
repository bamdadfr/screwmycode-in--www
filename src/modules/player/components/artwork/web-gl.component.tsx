import {useAtom} from 'jotai';
import React, {ReactElement} from 'react';
import {artworkAtom} from 'src/atoms/artwork.atoms';
import {speedAtom} from 'src/atoms/speed.atoms';
import {TextureComponent} from 'src/components/texture/texture.component';
import {Container} from 'src/modules/player/components/artwork/artwork.component.styles';

export function WebGlComponent(): ReactElement {
  const [artwork] = useAtom(artworkAtom);
  const [speed] = useAtom(speedAtom);

  return (
    <Container speed={speed.toString()}>
      <TextureComponent
        image={artwork || '/'}
        dryWet={speed}
      />
    </Container>
  );
}
