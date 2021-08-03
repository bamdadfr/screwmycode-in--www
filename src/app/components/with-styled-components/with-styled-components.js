import React from 'react'
import PropTypes from 'prop-types'
import { ThemeProvider } from 'styled-components'
import { Global, Theme } from '../../styles'

const propTypes = {
    'children': PropTypes.node.isRequired,
}

/**
 * @description wrapper with styled-components
 * @param {React.ReactNode} children wrapped children
 * @returns {React.ReactElement} react component
 */
export function WithStyledComponents ({ children }) {

    return (
        <>
            <Global/>
            <ThemeProvider theme={Theme}>
                {children}
            </ThemeProvider>
        </>
    )

}

WithStyledComponents.propTypes = propTypes