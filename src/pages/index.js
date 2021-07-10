import React from 'react'
import { useRouter } from 'next/router'
import FormComponent from '../components/form/form.component'

/**
 * @function
 * @name IndexPage
 * @description /
 * @returns {React.ReactElement} - react component
 */
export default function IndexPage () {

    const router = useRouter ()

    /**
     * @function
     * @name handleForm
     * @description handle form
     * @param {*} data - form data
     * @param {string} data.id - link
     */
    async function handleForm ({ id }) {

        await router.push (`/youtube/${id}`)

    }

    return (
        <>
            <FormComponent handleForm={handleForm}/>
        </>
    )

}