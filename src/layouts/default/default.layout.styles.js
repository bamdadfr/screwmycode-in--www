import styled from 'styled-components'
import { Breakpoints } from '../../app/styles/breakpoints'

export const Container = styled.div`
    position: fixed;

    display: grid;
    justify-content: center;
    align-items: center;
    grid-template-rows: repeat(2, 1fr);

    width: 100vw;
    height: 100vh;

    color: ${(props) => props.theme.primary};
    background: ${(props) => props.theme.background.primary};
`

export const Wrapper = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    flex-direction: column;
    
    height: 100%;
    
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