import React from 'react'
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