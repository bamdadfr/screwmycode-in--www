import React, { useEffect } from 'react'
import { useRouter } from 'next/router'

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

    return (
        <>
            Page not found, redirecting to home...
        </>
    )

}