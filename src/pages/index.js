import React from 'react'
import Head from 'next/head'
import { useRouter } from 'next/router'
import FormComponent from '../components/form/form.component'
import { StyledContainer } from '../pages-styles/index.styles'

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

        await router.push (`/youtube/${id}/1`)

    }

    const description = 'Variable speed pitch control for YouTube'
    const image = 'https://upload.wikimedia.org/wikipedia/en/7/7d/DJ_Screw.jpeg'

    // noinspection HtmlRequiredTitleElement
    return (
        <>
            <Head>

                <meta itemProp="description" content={description}/>
                <meta itemProp="image" content={image}/>

                <meta name='twitter:description' content={description}/>
                <meta name="twitter:image" content={image}/>

                <meta property="og:description" content={description}/>
                <meta property="og:image" content={image}/>

            </Head>
            <StyledContainer>
                <FormComponent handleForm={handleForm}/>
            </StyledContainer>
        </>
    )

}