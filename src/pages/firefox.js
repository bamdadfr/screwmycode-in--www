import React from 'react'
import Image from 'next/image'
import styled from 'styled-components'
import { DefaultLayout } from '../layouts'

const Container = styled.div`
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    width: 80%;
    max-width: 20em;
`

const ImageContainer = styled.div`
    position: relative;
    height: 10em;
    width: 4em;

    > div {
        transform: translate3d(0, -0.9em, 0);
    }
`

const TextContainer = styled.div`
    margin-left: 2em;
    text-align: left;
`

const TextLink = styled.a`
    font-weight: 600;
    color: ${(props) => props.theme.highlight};
    border-bottom: 0.15em solid ${(props) => props.theme.highlight};
`

/**
 * @returns {React.ReactElement} react component
 */
export default function FirefoxPage () {

    return (
        <>
            <DefaultLayout metaDescription="only available for firefox">
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
                            only available for firefox
                        </h2>
                        <div>
                            <TextLink
                                rel="noopener noreferrer"
                                target="_blank"
                                href="https://www.mozilla.org/firefox/new/"
                            >
                                download here
                            </TextLink>
                        </div>
                    </TextContainer>
                </Container>
            </DefaultLayout>
        </>
    )

}