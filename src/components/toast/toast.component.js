import React from 'react'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import styled from 'styled-components'

const StyledContainer = styled.div`
    & > div > div > div {
        background-color: black;
    }
`

export default function ToastComponent () {

    return (
        <>
            <StyledContainer>
                <ToastContainer/>
            </StyledContainer>
        </>
    )

}