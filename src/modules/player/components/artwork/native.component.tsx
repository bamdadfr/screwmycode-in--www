import {useAtom} from 'jotai';
import Image from 'next/image';
import React, {type ReactElement} from 'react';
import {artworkAtom} from 'src/atoms/artwork.atoms';
import {useAudioPlayerContext} from 'src/contexts/audio-player-context';
import {Container} from 'src/modules/player/components/artwork/artwork.component.styles';

interface Props {
  width: number;
}

export function NativeComponent({width}: Props): ReactElement {
  const [artwork] = useAtom(artworkAtom);
  const {speed} = useAudioPlayerContext();

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
