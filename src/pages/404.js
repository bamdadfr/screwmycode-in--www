import React, { useEffect } from 'react'
import { useRouter } from 'next/router'
import Head from 'next/head'

/**
 * @function
 * @name NotFoundPage
 * @description /404
 * @returns {React.ReactElement} - react component
 */
export default function NotFoundPage () {

    const router = useRouter ()

    /**
     * @function
     * @name onMount
     * @description setup automatic redirection to /
     */
    function onMount () {

        setTimeout (async () => {

            await router.push ('/')

        }, 2000)

    }

    useEffect (onMount, [])

    const description = 'page not found'

    // noinspection HtmlRequiredTitleElement
    return (
        <>
            <Head>

                <meta itemProp="description" content={description}/>

                <meta property="og:description" content={description}/>

                <meta name='twitter:description' content={description}/>

            </Head>
            <h2>
                Page not found, redirecting to home...
            </h2>
        </>
    )

}