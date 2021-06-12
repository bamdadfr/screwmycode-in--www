import React from 'react'
import { ThemeProvider } from 'styled-components'
import 'sass-reset'
import LayoutComponent from '@/components/layout/layout.component'
import { ThemeStyles } from '@/styles/theme.styles'
import { GlobalStyles } from '@/styles/global.styles'
import { Helmet } from 'react-helmet'
import { MetaData } from '@/data/meta.data'

export default function MyApp ({ Component, pageProps, err }) {

    return (
        <>
            <Helmet
                htmlAttributes={{ 'lang': 'en' }}
                title="Bamdad Sabbagh"
                meta={[
                    ...MetaData,
                ]}
            />
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