import React from 'react'
import { ThemeProvider } from 'styled-components'
import { Global, Theme } from '../src/app/styles'

/**
 * @function
 * @name JestWithStyledComponents
 * @description jest: wrapper with recoil and styled-components for tests
 * @param {React.ReactElement} Component - react sub component
 * @returns {React.ReactElement} - react component
 */
export function JestWithStyledComponents (Component) {

    return (
        <>
            <Global/>
            <ThemeProvider theme={Theme}>
                {Component}
            </ThemeProvider>
        </>
    )

}