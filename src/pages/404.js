import React, { useEffect } from 'react'
import { useRouter } from 'next/router'
import { CoreLayout } from '../layouts'

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

    // noinspection HtmlRequiredTitleElement
    return (
        <>
            <CoreLayout
                metaDescription="page not found"
            >
                <h2>
                    Page not found, redirecting to home...
                </h2>
            </CoreLayout>
        </>
    )

}