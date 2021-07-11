import React from 'react'
import PropTypes from 'prop-types'
import Link from 'next/link'
import { StyledContainer, StyledTitle } from './content.styles'

const propTypes = {
    'children': PropTypes.node.isRequired,
}

/**
 * @function
 * @name ContentComponent
 * @description layout: main component
 * @param {React.ReactElement} children - children to render
 * @returns {React.ReactElement} - react component
 */
export default function ContentComponent ({ children }) {

    return (
        <>
            <StyledContainer>

                <StyledTitle>
                    <Link href="/">
                        <a>
                            screwmycode.in
                        </a>
                    </Link>
                </StyledTitle>

                {children}

            </StyledContainer>
        </>
    )

}

ContentComponent.propTypes = propTypes