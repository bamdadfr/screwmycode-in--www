/* eslint-disable react/forbid-prop-types */
import React, { useEffect } from 'react'
import { ThemeProvider } from 'styled-components'
import 'sass-reset'
import { isFirefox } from 'react-device-detect'
import { useRouter } from 'next/router'
import PropTypes from 'prop-types'
import LayoutComponent from '../components/layout/layout.component'
import { ThemeStyles } from '../styles/theme.styles'
import { GlobalStyles } from '../styles/global.styles'
import * as gtag from '../lib/gtag'

const propTypes = {
    'Component': PropTypes.func.isRequired,
    'pageProps': PropTypes.object.isRequired,
    'err': PropTypes.any,
}

const defaultProps = {
    'err': undefined,
}

/**
 * @function
 * @name MyApp
 * @description next.js default component
 * @param {*} props - component props
 * @param {Function} props.Component - next.js component
 * @param {object} props.pageProps - next.js props
 * @param {*} props.err - next.js errors
 * @returns {React.ReactElement} - react component
 */
export default function MyApp ({ Component, pageProps, err }) {

    const router = useRouter ()

    /**
     * @function
     * @name onRouterEventsGtag
     * @description binds google tag to router events
     * @returns {Function<void>} - cleanup
     */
    function onRouterEventsGtag () {

        const handleRouteChange = (url) => {

            gtag.pageview (url)

        }

        router.events.on ('routeChangeComplete', handleRouteChange)

        return () => {

            router.events.off ('routeChangeComplete', handleRouteChange)

        }

    }

    useEffect (onRouterEventsGtag, [router.events])

    /**
     * @function
     * @name onRouterEventsFirefox
     * @description checks if browser is not firefox
     */
    async function onRouterEventsFirefox () {

        if (!isFirefox) {

            await router.push ('/firefox')

        }

    }

    useEffect (onRouterEventsFirefox, [router.events])

    return (
        <>
            <GlobalStyles/>
            <ThemeProvider theme={ThemeStyles}>
                <LayoutComponent>
                    {/* eslint-disable-next-line react/jsx-props-no-spreading */}
                    <Component {...pageProps} err={err}/>
                </LayoutComponent>
            </ThemeProvider>
        </>
    )

}

MyApp.propTypes = propTypes

MyApp.defaultProps = defaultProps