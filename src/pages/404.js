import React, { useEffect } from 'react'
import { useRouter } from 'next/router'
import Head from 'next/head'

/**
 * @function
 * @name NotFoundPage
 * @description /404
 * @returns {React.ReactNode} - react component
 */
export default function NotFoundPage () {

    const router = useRouter ()

    /**
     * @function
     * @name autoRedirectHome
     * @description set up automatic redirection to home after delay
     */
    function autoRedirectHome () {

        setTimeout (async () => {

            await router.push ('/')

        }, 2000)

    }

    useEffect (autoRedirectHome, [])

    // noinspection HtmlRequiredTitleElement
    return (
        <>
            <Head>
                <meta property="og:title" content="404"/>
                <meta property="og:description" content="page not found"/>
            </Head>
            Page not found, redirecting to home...
        </>
    )

}