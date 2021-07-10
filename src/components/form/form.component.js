import React, { useEffect, useRef, useState } from 'react'
import { StyledForm, StyledInput, StyledSubmit } from './form.styles'
import { GetYoutubeIdFromUrlUtils } from '../../utils/get-youtube-id-from-url.utils'

/**
 * @function
 * @name FormComponent
 * @description form component
 * @param {*} props - props
 * @param {Function} props.handleForm - handle form function from HOC
 * @returns {React.ReactElement} - react component
 */
export default function FormComponent ({ handleForm }) {

    const linkRef = useRef (null)
    const [link, setLink] = useState ('')

    /**
     * @function
     * @name onMount
     * @description on component mount
     * @returns {Function<FocusEvent>} - clean up function
     */
    function onMount () {

        // https://reactjs.org/blog/2020/08/10/react-v17-rc.html#potential-issues
        const linkInstance = linkRef.current

        const onLinkBlur = () => {

            setTimeout (() => {

                linkInstance.focus ()

            }, 100)

        }

        onLinkBlur ()

        linkInstance.addEventListener ('blur', onLinkBlur)

        return () => linkInstance.removeEventListener ('blur', onLinkBlur)

    }

    useEffect (onMount, [])

    /**
     * @function
     * @name onSubmit
     * @description handle when form is submitted
     * @param {React.FormEvent} event - form event
     * @returns {Promise<void>}
     */
    async function onSubmit (event) {

        event.preventDefault ()

        const id = GetYoutubeIdFromUrlUtils (link)

        if (!id) {

            setLink ('')

            return

        }

        handleForm ({
            id,
        })

    }

    return (
        <>
            <StyledForm onSubmit={onSubmit}>
                <StyledInput
                    placeholder="insert youtube link here"
                    type="text"
                    ref={linkRef}
                    value={link}
                    onChange={(e) => setLink (e.target.value)}
                />
                <StyledSubmit
                    type="submit"
                    value="submit"
                />
            </StyledForm>
        </>

    )

}