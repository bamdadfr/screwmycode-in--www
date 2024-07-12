import Image from 'next/legacy/image';
import React, {ReactElement} from 'react';

import {DotsComponent} from './components/dots/dots.component';
import {Container, ImageContainer, Text} from './loading.component.styles';

/**
 * Component for the loading screen
 */
export function LoadingComponent(): ReactElement {
  return (
    <Container>
      <ImageContainer>
        <Image
          src="/icons/SCRW_CHAMP.svg"
          alt="filling glass"
          layout="fill"
          objectFit="contain"
        />
      </ImageContainer>

      <Text>
        loading
        <DotsComponent />
      </Text>
    </Container>
  );
}
