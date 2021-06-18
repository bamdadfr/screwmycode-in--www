import React, { useEffect, useRef } from 'react'
import { useRouter } from 'next/router'
import { GetYoutubeIdFromUrlUtils } from '@/utils/get-youtube-id-from-url.utils'
import { StyledForm, StyledInput, StyledSubmit } from '../pages-styles/index.styles'

export default function IndexPage () {

    const inputRef = useRef (null)
    const router = useRouter ()

    async function onSubmit (event) {

        event.preventDefault ()

        const target = event.target[0]
        const id = GetYoutubeIdFromUrlUtils (target.value)

        if (id) {

            target.blur ()

            const href = `/youtube/${id}`

            await router.push (href)

        } else {

            target.value = ''

        }

    }

    useEffect (() => {

        inputRef.current.focus ()

    }, [])

    return (
        <>
            <StyledForm onSubmit={onSubmit}>
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