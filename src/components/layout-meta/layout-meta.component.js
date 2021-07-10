import React from 'react'
import Head from 'next/head'

/**
 * @function
 * @name LayoutMetaComponent
 * @description layout: meta component (head and SEO tags)
 * @returns {React.ReactElement} - react component
 */
export default function LayoutMetaComponent () {

    const title = 'ScrewMyCode.In'
    const description = 'Variable speed pitch control for YouTube'
    const url = 'https://screwmycode.in'
    const image = 'https://screwmycode.in/static/media/SCRW_KSET.1288b6ee.svg'

    // noinspection HtmlRequiredTitleElement,HtmlUnknownTarget
    return (
        <Head lang="en">

            <meta charSet="UTF-8"/>
            <meta property="viewport" content="width=device-width, initial-scale=1.0"/>

            <title>{title}</title>

            <meta itemProp="name" content={title}/>
            <meta itemProp="description" content={description}/>
            <meta itemProp="image" content={image}/>

            <meta name="twitter:card" content="summary_large_image"/>
            <meta name="twitter:title" content={title}/>
            <meta name='twitter:description' content={description}/>
            <meta name="twitter:image" content={image}/>

            <meta property="og:site_name" content={title}/>
            <meta property="og:type" content="website"/>
            <meta property="og:url" content={url}/>
            <meta property="og:title" content={title}/>
            <meta property="og:description" content={description}/>
            <meta property="og:image" content={image}/>

            {/* from https://realfavicongenerator.net/ */}
            <link rel="apple-touch-icon" sizes="180x180" href="/favicon/apple-touch-icon.png"/>
            <link rel="icon" type="image/png" sizes="32x32" href="/favicon/favicon-32x32.png"/>
            <link rel="icon" type="image/png" sizes="16x16" href="/favicon/favicon-16x16.png"/>
            <link rel="manifest" href="/favicon/site.webmanifest"/>
            <link rel="mask-icon" href="/favicon/safari-pinned-tab.svg" color="#5bbad5"/>
            <meta name="msapplication-TileColor" content="#da532c"/>
            <meta name="theme-color" content="#ffffff"/>

        </Head>
    )

}