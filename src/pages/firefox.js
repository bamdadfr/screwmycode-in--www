import React from 'react'
import styled from 'styled-components'
import { DefaultLayout } from '../layouts'

const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    font-size: 1.1em;
`

const TextLink = styled.a`
    font-weight: 900;
    text-decoration: none;
    border-bottom: 1px solid white;
`

/**
 * @returns {React.ReactElement} react component
 */
export default function FirefoxPage () {

    return (
        <>
            <DefaultLayout metaDescription="only available for firefox">
                <Container>
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
                </Container>
            </DefaultLayout>
        </>
    )

}