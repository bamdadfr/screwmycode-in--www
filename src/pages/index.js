import React, { useEffect, useRef } from 'react'
import { useRouter } from 'next/router'
import { GetYoutubeIdFromUrlUtils } from '@/utils/get-youtube-id-from-url.utils'
import Head from 'next/head'
import { TitleData } from '@/data/title.data'
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
     * @returns {Function<void>} - clean up function
     */
    function onMount () {

        // https://reactjs.org/blog/2020/08/10/react-v17-rc.html#potential-issues
        const inputInstance = inputRef.current

        const listener = () => {

            setTimeout (() => {

                inputInstance.focus ()

            }, 100)

        }

        listener ()

        inputInstance.addEventListener ('blur', listener)

        return () => {

            inputInstance.removeEventListener ('blur', listener)

        }

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
            <Head>
                <title>{TitleData}</title>
            </Head>
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