/* eslint-disable jsdoc/require-jsdoc */
import React, { useEffect } from 'react'
import { RecoilRoot } from 'recoil'
import { ThemeProvider } from 'styled-components'
import 'sass-reset'
import { isFirefox } from 'react-device-detect'
import { useRouter } from 'next/router'
import Head from 'next/head'
import LayoutComponent from '../components/layout/layout.component'
import { ThemeStyles } from '../styles/theme.styles'
import { GlobalStyles } from '../styles/global.styles'

export default function MyApp ({ Component, pageProps, err }) {

    const router = useRouter ()

    useEffect (async () => {

        if (!isFirefox) {

            await router.push ('/firefox')

        }

    }, [router.route])

    return (
        <>
            <RecoilRoot>
                <Head>
                    <title>
                        ScrewMyCode.In
                    </title>
                    <meta property="viewport" content="width=device-width, initial-scale=1"/>
                    <meta property="og:title" content="ScrewMyCode.In"/>
                </Head>
                <GlobalStyles/>
                <ThemeProvider theme={ThemeStyles}>
                    <LayoutComponent>
                        {/* eslint-disable-next-line react/jsx-props-no-spreading */}
                        <Component {...pageProps} err={err}/>
                    </LayoutComponent>
                </ThemeProvider>
            </RecoilRoot>
        </>
    )

}