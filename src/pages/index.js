import React from 'react'
import { useRouter } from 'next/router'
import { FormComponent } from '../domains/home/form/form.component'
import { HomeLayout } from '../layouts'

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
     * @param {string} path - link
     */
    async function handleForm (path) {

        await router.push (path)

    }

    return (
        <>
            <HomeLayout>
                <FormComponent handleForm={handleForm}/>
            </HomeLayout>
        </>
    )

}