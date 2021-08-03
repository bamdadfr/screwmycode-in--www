import styled from 'styled-components'
import { Breakpoints } from '../../app/styles'

export const Title = styled.h1`
    display: flex;
    justify-content: center;
    align-items: flex-end;
    
    height: 100%;

    margin-bottom: 3em;
    
    font-size: 3em;
    font-weight: 900;
    transition: color 200ms ease-in-out;

    &:hover {
        color: ${(props) => props.theme.highlight};
    }
    
    @media screen and (max-width: ${Breakpoints.tablet - 1}px) {
        font-size: 2em;
    }
`