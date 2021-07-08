import React from 'react'
import Document, { Html, Head, Main, NextScript } from 'next/document'
import { TitleData } from '@/data/title.data'

export default class MyDocument extends Document {

    render () {

        return (
            <Html>
                <Head>
                    <title>
                        {TitleData}
                    </title>
                </Head>
                <body>
                    <Main/>
                    <NextScript/>
                </body>
            </Html>
        )

    }

}