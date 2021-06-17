import React, { useEffect, useRef } from 'react'
import { useRouter } from 'next/router'
import styled from 'styled-components'
import { GetYoutubeIdFromUrlUtils } from '@/utils/get-youtube-id-from-url.utils'

const StyledInput = styled.input`
    width: 280px;
    font-size: 1.32em;
    border: 1px solid #606060;
    padding: 3px 0 0 5px;
    color: #efefef;
    background: rgba(0, 0, 0, 0.6);
`

const StyledSubmit = styled.input`
    margin: 1em;
    padding: 3px 6px;
    font-size: 1.1em;
    border: 1px solid #606060;
    color: #959595;
    background: rgba(0, 0, 0, .6);
`

const StyledForm = styled.form`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`

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