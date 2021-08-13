import { useInput } from './use-input'
import { useInputRefocus } from './use-input-refocus'
import { useFormSubmit } from './use-form-submit'

/**
 * @typedef {useInput} Link
 * @typedef {Function} HandleSubmit
 * @returns {{Link, HandleSubmit}} form attributes
 */
export function useFormComponent () {

    const link = useInput ()

    useInputRefocus (link.ref)

    const { handleSubmit } = useFormSubmit ({ link })

    return {
        link,
        handleSubmit,
    }

}