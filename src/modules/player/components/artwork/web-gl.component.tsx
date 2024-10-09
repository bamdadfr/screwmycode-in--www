import {useAtom} from 'jotai';
import React, {type ReactElement} from 'react';
import {artworkAtom} from 'src/atoms/artwork.atoms';
import {TextureComponent} from 'src/components/texture/texture.component';
import {useAudioPlayerContext} from 'src/contexts/audio-player-context';
import {Container} from 'src/modules/player/components/artwork/artwork.component.styles';

interface Props {
  width: number;
}

export function WebGlComponent({width}: Props): ReactElement {
  const [artwork] = useAtom(artworkAtom);
  const {speed} = useAudioPlayerContext();

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
