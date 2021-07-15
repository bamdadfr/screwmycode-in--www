import React from 'react'
import { Container, TextLink } from '../pages-styles/firefox.styles'
import { CoreLayout } from '../layouts'

/**
 * @function
 * @name FirefoxPage
 * @description page: /firefox
 * @returns {React.ReactElement} - react component
 */
export default function FirefoxPage () {

    return (
        <>
            <CoreLayout
                metaDescription="only available for firefox"
            >
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
            </CoreLayout>
        </>
    )

}