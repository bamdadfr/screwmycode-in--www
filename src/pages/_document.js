import React from 'react'
import Document, { Html, Head, Main, NextScript } from 'next/document'
import { Helmet } from 'react-helmet'

export default class MyDocument extends Document {

    static async getInitialProps (...args) {

        const documentProps = await super.getInitialProps (...args)

        return {
            ...documentProps,
            'helmet': Helmet.renderStatic (),
        }

    }

    // should render on <html>
    get helmetHtmlAttrComponents () {

        return this.props.helmet.htmlAttributes.toComponent ()

    }

    // should render on <body>
    get helmetBodyAttrComponents () {

        return this.props.helmet.bodyAttributes.toComponent ()

    }

    // should render on <head>
    get helmetHeadComponents () {

        return Object.keys (this.props.helmet)
            .filter ((el) => el !== 'htmlAttributes' && el !== 'bodyAttributes')
            .map ((el) => this.props.helmet[el].toComponent ())

    }

    render () {

        return (
            // eslint-disable-next-line react/jsx-props-no-spreading
            <Html {...this.helmetHtmlAttrComponents}>
                <Head>
                    {this.helmetHeadComponents}
                </Head>
                {/* eslint-disable-next-line react/jsx-props-no-spreading */}
                <body {...this.helmetBodyAttrComponents}>
                    <Main/>
                    <NextScript/>
                </body>
            </Html>
        )

    }

}