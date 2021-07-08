import React from 'react'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { StyledContainer } from './toast.styles'

/**
 * @function
 * @name ToastComponent
 * @description toast
 * @returns {React.ReactNode} - react component
 */
export default function ToastComponent () {

    return (
        <>
            <StyledContainer>
                <ToastContainer/>
            </StyledContainer>
        </>
    )

}