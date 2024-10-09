import React, {type ReactElement} from 'react';
import {TextureComponent} from 'src/components/texture/texture.component';
import {useAudioPlayerContext} from 'src/contexts/audio-player-context';
import {Container} from 'src/modules/player/components/artwork/artwork.component.styles';

interface Props {
  width: number;
}

export function WebGlComponent({width}: Props): ReactElement {
  const {speed, artwork} = useAudioPlayerContext();

  return (
    <Container speed={speed.toString()}>
      <TextureComponent
        image={artwork}
        dryWet={speed}
        width={width}
      />
    </Container>
  );
}
