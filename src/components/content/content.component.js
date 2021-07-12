import React from 'react'
import PropTypes from 'prop-types'
import Link from 'next/link'
import { StyledContainer, StyledTitle } from './content.styles'

const propTypes = {
    'children': PropTypes.element.isRequired,
}

/**
 * @function
 * @name ContentComponent
 * @description render the content
 * @param {object} props - props
 * @param {React.ReactElement} props.children - children to render
 * @returns {React.ReactElement} - react component
 */
export default function ContentComponent ({ children }) {

    return (
        <>
            <StyledContainer>

                <StyledTitle>
                    <Link href="/">
                        {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
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