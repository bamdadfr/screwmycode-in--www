import React from 'react'
import { CoreLayout } from '../layouts'
import { useRedirectAuto } from '../hooks'

/**
 * @returns {React.ReactElement} react component
 */
export default function NotFoundPage () {

    useRedirectAuto ('/', 2000)

    return (
        <>
            <CoreLayout metaDescription="page not found">
                <h2>
                    Page not found, redirecting to home...
                </h2>
            </CoreLayout>
        </>
    )

}