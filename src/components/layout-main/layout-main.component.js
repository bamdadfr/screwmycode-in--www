import React from 'react'
import PropTypes from 'prop-types'
import Link from 'next/link'
import { StyledContainer, StyledTitle } from './layout-main.styles'

const propTypes = {
    'children': PropTypes.node.isRequired,
}

/**
 * @function
 * @name LayoutMainComponent
 * @description layout: main component
 * @param {React.ReactElement} children - children to render
 * @returns {React.ReactElement} - react component
 */
export default function LayoutMainComponent ({ children }) {

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

LayoutMainComponent.propTypes = propTypes