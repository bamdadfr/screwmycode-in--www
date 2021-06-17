import React, { useEffect } from 'react'
import { useRouter } from 'next/router'

export default function NotFoundPage () {

    const router = useRouter ()

    useEffect (() => {

        setTimeout (async () => {

            await router.push ('/')

        }, 2000)

    }, [])

    return (
        <>
            Page not found, redirecting to home...
        </>
    )

}