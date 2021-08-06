import { useCallback } from 'react'
import { useRouter } from 'next/router'
import { useInput } from './use-input'
import { useInputRefocus } from './use-input-refocus'
import { validateForm } from '../utils/validate-form'

/**
 * @typedef {useInput} Link
 * @typedef {Function} HandleSubmit
 * @returns {{Link, HandleSubmit}} form attributes
 */
export function useFormComponent () {

    const router = useRouter ()
    const link = useInput ()

    useInputRefocus (link.ref)

    const handleSubmit = useCallback (async (event) => {

        event.preventDefault ()

        const { isValid, path } = validateForm (link.value)

        if (!isValid) return link.resetValue ()

        await router.push (path)
    
    }, [link, router])

    return {
        link,
        handleSubmit,
    }

}
