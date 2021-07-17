import styled from 'styled-components'
import { Breakpoints } from '../../app/styles'

export const Container = styled.div`
    position: fixed;
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    flex-direction: column;

    color: ${(props) => props.theme.primary};
    background: ${(props) => props.theme.background.primary};
`

export const Wrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 100vw;
    text-align: center;
    font-size: 1.1em;

    @media screen and ${Breakpoints.mobile} {
        width: 90vw;
    }

    @media screen and ${Breakpoints.tablet} {
        width: 80vw;
    }

    @media screen and ${Breakpoints.desktop} {
        width: 60vw;
    }

    @media screen and ${Breakpoints.widescreen} {
        width: 50vw;
    }

    @media screen and ${Breakpoints.fullhd} {
        width: 40vw;
    }
`