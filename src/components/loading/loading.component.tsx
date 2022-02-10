import React, {ReactElement} from 'react';
import Image from 'next/image';
import {
  Container,
  ImageContainer,
  TextContainer,
} from './loading.component.styles';
import {DotsComponent} from './components/dots/dots.component';
import {FadeAnimation} from '../../animations/fade/fade.animation';
import {TextLinkComponent} from '../text-link/text-link.component';

/**
 * Component for the loading screen
 */
export function LoadingComponent(): ReactElement {
  return (
    <>
      <Container>
        <ImageContainer>
          <Image
            src="/icons/SCRW_CHAMP.svg"
            alt="filling glass"
            layout="fill"
            objectFit="contain"
          />
        </ImageContainer>
        <TextContainer>
          <h2>
            loading<DotsComponent />
          </h2>
          <div>
            <FadeAnimation delay={8000}>
              tired of waiting?
            </FadeAnimation>
            <FadeAnimation delay={10000}>
              <>
                use&nbsp;
                <TextLinkComponent
                  target="_blank"
                  href="https://www.mozilla.org/firefox/new/"
                  bold
                  underline
                >
                  Firefox
                </TextLinkComponent>
              </>
            </FadeAnimation>
          </div>
        </TextContainer>
      </Container>
    </>
  );
}
