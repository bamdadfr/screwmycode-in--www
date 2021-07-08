import React, { useEffect, useRef } from 'react'
import { useRouter } from 'next/router'
import { GetYoutubeIdFromUrlUtils } from '@/utils/get-youtube-id-from-url.utils'
import { Helmet } from 'react-helmet'
import { TitleData } from '@/data/title.data'
import { MetaData } from '@/data/meta.data'
import { StyledForm, StyledInput, StyledSubmit } from '../pages-styles/index.styles'

/**
 * @function
 * @name IndexPage
 * @description /
 * @returns {React.ReactNode} - react component
 */
export default function IndexPage () {

    const inputRef = useRef (null)
    const router = useRouter ()

    /**
     * @function
     * @name onMount
     * @description on component mount
     */
    function onMount () {

        inputRef.current.focus ()

    }

    useEffect (onMount, [])

    /**
     * @function
     * @name onFormSubmit
     * @description handle when form is submitted
     * @param {React.FormEvent} event - event when submitted
     * @returns {Promise<void>}
     */
    async function onFormSubmit (event) {

        event.preventDefault ()

        const target = event.target[0]
        const id = GetYoutubeIdFromUrlUtils (target.value)

        if (!id) {

            target.value = ''

            return

        }

        target.blur ()

        await router.push (`/youtube/${id}`)

    }

    return (
        <>
            <Helmet
                title={TitleData}
                meta={[
                    ...MetaData,
                    {
                        'property': 'og:description',
                        'content': TitleData,
                    },
                ]}
            />
            <StyledForm onSubmit={onFormSubmit}>
                <StyledInput
                    placeholder="insert youtube link here"
                    type="text"
                    ref={inputRef}
                />
                <StyledSubmit type="submit" value="submit"/>
            </StyledForm>
        </>
    )

}