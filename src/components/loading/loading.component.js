import React from 'react'
import Image from 'next/image'
import { Container, ImageContainer, TextContainer, TextLink } from './loading.component.styles'
import { DotsComponent } from './components'
import { FadeAnimation } from '../../animations'

/**
 * @returns {React.ReactElement} react component
 */
export function LoadingComponent () {

    return (
        <>
            <Container>
                <ImageContainer>
                    <Image
                        src="/icons/SCRW_CHAMP.svg"
                        layout="fill"
                        objectFit="contain"
                    />
                </ImageContainer>
                <TextContainer>
                    <h2>
                        loading<DotsComponent/>
                    </h2>
                    <div>
                        <FadeAnimation delay={8000}>
                            tired of waiting?
                        </FadeAnimation>
                        <FadeAnimation delay={10000}>
                            use&nbsp;
                            <TextLink
                                rel="noopener noreferrer"
                                target="_blank"
                                href="https://www.mozilla.org/firefox/new/"
                            >
                                Firefox
                            </TextLink>
                        </FadeAnimation>
                    </div>
                </TextContainer>
            </Container>
        </>
    )

}