import React from 'react'
import Head from 'next/head'
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
    const description = 'Variable speed pitch control for YouTube'

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

    // noinspection HtmlRequiredTitleElement
    return (
        <>
            <Head>
                <meta itemProp="description" content={description}/>
                <meta name='twitter:description' content={description}/>
                <meta property="og:description" content={description}/>

            </Head>
            <FormComponent handleForm={handleForm}/>
        </>
    )

}