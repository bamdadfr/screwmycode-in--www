import styled from 'styled-components'

export const Container = styled.div`
    position: fixed;
    z-index: 10;
    margin: 7px 7px;
    top: 0;
    left: 0;
    font-size: 2rem;
    color: ${(props) => props.theme.primary};

    > button {
        transition: color 200ms ease-in-out;

        &:hover {
            cursor: pointer;
            color: ${(props) => props.theme.highlight};
        }

    }
`

