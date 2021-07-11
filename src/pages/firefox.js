import React from 'react'
import Head from 'next/head'
import { StyledContainer, StyledLink } from '../pages-styles/firefox.styles'

/**
 * @function
 * @name FirefoxPage
 * @description page: /firefox
 * @returns {React.ReactElement} - react component
 */
export default function FirefoxPage () {

    const description = 'available only for firefox'

    // noinspection HtmlRequiredTitleElement
    return (
        <>
            <Head>

                <meta itemProp="description" content={description}/>

                <meta property="og:description" content={description}/>

                <meta name='twitter:description' content={description}/>

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