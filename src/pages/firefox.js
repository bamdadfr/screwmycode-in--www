import React from 'react'
import Head from 'next/head'
import { TitleData } from '@/data/title.data'
import { StyledContainer, StyledLink } from '../pages-styles/firefox.styles'

/**
 * @function
 * @name FirefoxPage
 * @description page: /firefox
 * @returns {React.ReactNode} - react component
 */
export default function FirefoxPage () {

    return (
        <>
            <Head>
                <title>{TitleData}</title>
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