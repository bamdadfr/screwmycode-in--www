import React from 'react'
import Head from 'next/head'
import { StyledContainer, StyledLink } from '../pages-styles/firefox.styles'

/**
 * @function
 * @name FirefoxPage
 * @description page: /firefox
 * @returns {React.ReactNode} - react component
 */
export default function FirefoxPage () {

    // noinspection HtmlRequiredTitleElement
    return (
        <>
            <Head>
                <meta property="og:description" content="available only for firefox"/>
            </Head>
            <StyledContainer>
                <div>
                    available only for firefox
                </div>
                <div>
                    <StyledLink
                        rel="noopener noreferrer"
                        target="_blank"
                        href="https://www.mozilla.org/firefox/new/"
                    >
                        download here
                    </StyledLink>
                </div>
            </StyledContainer>
        </>
    )

}