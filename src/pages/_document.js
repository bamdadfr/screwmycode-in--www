import React from 'react'
import Document, { Html, Head, Main, NextScript } from 'next/document'

export default class MyDocument extends Document {

    render () {

        // noinspection HtmlRequiredTitleElement
        return (
            <Html>
                <Head/>
                <body>
                    <Main/>
                    <NextScript/>
                </body>
            </Html>
        )

    }

}