/* eslint-disable react/no-danger */
import React from 'react'
import Document, { Html, Head, Main, NextScript } from 'next/document'
import { ServerStyleSheet } from 'styled-components'
import { GA_TRACKING_ID } from '../app/lib/gtag'

export default class MyDocument extends Document {

    static async getInitialProps (ctx) {

        const sheet = new ServerStyleSheet ()
        const originalRenderPage = ctx.renderPage

        try {

            ctx.renderPage = () =>
                originalRenderPage ({
                    'enhanceApp': (App) => (props) =>
                        // eslint-disable-next-line react/jsx-props-no-spreading
                        sheet.collectStyles (<App {...props} />),
                })

            const initialProps = await Document.getInitialProps (ctx)

            return {
                ...initialProps,
                'styles': (
                    <>
                        {initialProps.styles}
                        {sheet.getStyleElement ()}
                    </>
                ),
            }

        } finally {

            sheet.seal ()

        }

    }

    render () {

        // noinspection HtmlRequiredTitleElement
        return (
            <Html lang="en">
                <Head>
                    {/* Global Site Tag (gtag.js) - Google Analytics */}
                    <script async src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`}/>
                    <script
                        dangerouslySetInnerHTML={{ '__html': `function gtag(){dataLayer.push(arguments)}window.dataLayer=window.dataLayer||[],gtag("js",new Date),gtag("config","${GA_TRACKING_ID}",{page_path:window.location.pathname});` }}
                    />
                </Head>
                <body>
                    <Main/>
                    <NextScript/>
                </body>
            </Html>
        )

    }

}