// noinspection JSUnusedGlobalSymbols

import React from 'react'
import { DefaultLayout } from '../layouts'
import { useRedirectAuto } from '../hooks'

/**
 * @returns {React.ReactElement} react component
 */
export default function NotFoundPage () {

    useRedirectAuto ()

    return (
        <>
            <DefaultLayout metaDescription="page not found">
                <h2>
                    Page not found, redirecting to home...
                </h2>
            </DefaultLayout>
        </>
    )

}