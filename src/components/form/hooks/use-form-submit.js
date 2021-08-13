import { useCallback, useEffect } from 'react'
import { useRouter } from 'next/router'
import { validateForm } from '../utils/validate-form'

/**
 * @param {object} params parameters
 * @param {object} params.link input link
 * @typedef {function(): undefined} HandleSubmit
 * @returns {{HandleSubmit}} form submit handler
 */
export function useFormSubmit ({ link }) {

    const router = useRouter ()

    // warmup validateForm by important its dependencies
    useEffect (() => {

        (async () => {

            await import ('soundcloud-scraper')

            await import ('ytdl-core')

        }) ()
    
    }, [])

    const handleSubmit = useCallback (async (event) => {

        event.preventDefault ()

        const { isValid, path } = await validateForm (link.value)

        if (!isValid) return link.resetValue ()

        await router.push (path)

    }, [link, router])

    return {
        handleSubmit,
    }

}