import styled from 'styled-components'
import { BreakpointsStyles } from '../../styles/breakpoints.styles'

export const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 100vw;
    text-align: center;

    @media screen and ${BreakpointsStyles.mobile} {
        width: 90vw;
    }

    @media screen and ${BreakpointsStyles.tablet} {
        width: 80vw;
    }

    @media screen and ${BreakpointsStyles.desktop} {
        width: 60vw;
    }

    @media screen and ${BreakpointsStyles.widescreen} {
        width: 50vw;
    }

    @media screen and ${BreakpointsStyles.fullhd} {
        width: 40vw;
    }
`
