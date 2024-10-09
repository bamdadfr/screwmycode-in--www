import {useAtom} from 'jotai';
import React, {type ReactElement} from 'react';
import {artworkAtom} from 'src/atoms/artwork.atoms';
import {speedAtom} from 'src/atoms/speed.atoms';
import {TextureComponent} from 'src/components/texture/texture.component';
import {Container} from 'src/modules/player/components/artwork/artwork.component.styles';

interface Props {
  width: number;
}

export function WebGlComponent({width}: Props): ReactElement {
  const [artwork] = useAtom(artworkAtom);
  const [speed] = useAtom(speedAtom);

  return (
    <Container speed={speed.toString()}>
      <TextureComponent
        image={artwork || '/'}
        dryWet={speed}
        width={width}
      />
    </Container>
  );
}
