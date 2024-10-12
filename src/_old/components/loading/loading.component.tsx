import Image from 'next/legacy/image';
import React, {type ReactElement} from 'react';

import {DotsComponent} from './components/dots/dots.component';
import {Container, ImageContainer, Text} from './loading.component.styles';

export function LoadingComponent(): ReactElement {
  return (
    <Container>
      <ImageContainer>
        <Image
          src="/icons/SCRW_CHAMP.svg"
          alt="filling glass"
          layout="fill"
          objectFit="contain"
          priority
        />
      </ImageContainer>

      <Text>
        loading
        <DotsComponent />
      </Text>
    </Container>
  );
}
