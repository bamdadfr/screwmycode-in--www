import styled from 'styled-components'

export const Title = styled.h1`
    font-size: 3em;
    font-weight: 900;
    transition: color 200ms ease-in-out;

    &:hover {
        color: ${(props) => props.theme.highlight};
    }
`