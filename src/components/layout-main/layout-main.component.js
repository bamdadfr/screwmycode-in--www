import React from 'react'
import PropTypes from 'prop-types'
import { StyledContainer } from './layout-main.styles'

const propTypes = {
    'children': PropTypes.node.isRequired,
}

/**
 * @function
 * @name LayoutMainComponent
 * @description layout: main component
 * @param {JSX.Element} children
 * @return {JSX.Element}
 */
export default function LayoutMainComponent ({ children }) {

    return (
        <>
            <StyledContainer>
                {children}
            </StyledContainer>
        </>
    )

}

LayoutMainComponent.propTypes = propTypes