import React from 'react'
import { ThemeProvider } from 'styled-components'
import { Theme } from '../src/app/styles'

/**
 * @function
 * @name JestWrapper
 * @description jest: wrapper with recoil and styled-components for tests
 * @param {React.ReactElement} Component - react sub component
 * @returns {React.ReactElement} - react component
 */
export function JestWrapper (Component) {

    return (
        <ThemeProvider theme={Theme}>
            {Component}
        </ThemeProvider>
    )

}