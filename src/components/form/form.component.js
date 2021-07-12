import React, { useEffect, useRef, useState } from 'react'
import PropTypes from 'prop-types'
import * as ytdl from 'ytdl-core'
import { StyledForm, StyledInput, StyledSubmit } from './form.styles'

const propTypes = {
    'handleForm': PropTypes.func.isRequired,
}

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
     * @description setup listeners
     * @returns {Function<void>} - cleanup
     */
    function onMount () {

        // https://reactjs.org/blog/2020/08/10/react-v17-rc.html#potential-issues
        const linkInstance = linkRef.current

        const blurListener = () => {

            setTimeout (() => {

                linkInstance.focus ()

            }, 100)

        }

        blurListener ()

        linkInstance.addEventListener ('blur', blurListener)

        return () => {

            linkInstance.removeEventListener ('blur', blurListener)

        }

    }

    useEffect (onMount, [])

    /**
     * @function
     * @name handleSubmit
     * @description handle when form is submitted
     * @param {React.FormEvent} event - form event
     * @returns {Promise<void>}
     */
    async function handleSubmit (event) {

        event.preventDefault ()

        try {

            const id = ytdl.getURLVideoID (link)

            handleForm ({ id })

        } catch {

            setLink ('')

        }

    }

    return (
        <>
            <StyledForm onSubmit={handleSubmit}>
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

FormComponent.propTypes = propTypes