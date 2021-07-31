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
    justify-content: flex-start;
    align-items: center;
    flex-direction: column;
    width: 100vw;
    height: 16em;
    text-align: center;
    font-size: 1.1em;
    
    @media screen and (max-width: ${Breakpoints.mobile}px) {
        width: 90vw;
    }

    @media screen and (min-width: ${Breakpoints.tablet}px) {
        width: 80vw;
    }

    @media screen and (min-width: ${Breakpoints.desktop}px) {
        width: 60vw;
    }

    @media screen and (min-width: ${Breakpoints.widescreen}px) {
        width: 50vw;
    }

    @media screen and (min-width: ${Breakpoints.fullhd}px) {
        width: 40vw;
    }
`