/* eslint-disable react/forbid-prop-types */
import React from 'react'
import { ThemeProvider } from 'styled-components'
import 'sass-reset'
import PropTypes from 'prop-types'
import { ThemeStyles } from '../app/styles/theme.styles'
import { GlobalStyles } from '../app/styles/global.styles'
import { useApp } from '../app/hooks'

const propTypes = {
    'Component': PropTypes.func.isRequired,
    'pageProps': PropTypes.object.isRequired,
    'err': PropTypes.any,
}

const defaultProps = {
    'err': undefined,
}

/**
 * @param {object} props component props
 * @param {Function} props.Component next.js component
 * @param {object} props.pageProps next.js props
 * @param {*} props.err next.js errors
 * @returns {React.ReactElement} react component
 */
export default function MyApp ({ Component, pageProps, err }) {

    useApp ()

    return (
        <>
            <GlobalStyles/>
            <ThemeProvider theme={ThemeStyles}>
                {/* eslint-disable-next-line react/jsx-props-no-spreading */}
                <Component {...pageProps} err={err}/>
            </ThemeProvider>
        </>
    )

}

MyApp.propTypes = propTypes

MyApp.defaultProps = defaultProps