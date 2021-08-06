import React from 'react'
import { DefaultLayout } from '../layouts/default/default.layout'
import { useRedirectAuto } from '../hooks/use-redirect-auto'

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