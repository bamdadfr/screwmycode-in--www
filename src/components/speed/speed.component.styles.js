import styled from 'styled-components'

export const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 1em;
    background: transparent;
    width: 90%;
`

export const Slider = styled.input`
    width: 100%;

    &::-moz-range-thumb {
        box-shadow: 1px 1px 1px ${(props) => props.theme.background.primary},
        0 0 1px ${(props) => props.theme.background.highlight};
        border: 0.15em solid ${(props) => props.theme.primary};
        background: ${(props) => props.theme.background.highlight};
        cursor: pointer;
        border-radius: 100%;
        width: 1.3em;
        height: 1.3em;
        transition: border 100ms ease-in-out;

        &:hover {
            border: 0.15em solid ${(props) => props.theme.highlight};
        }
    }

    &::-moz-range-track {
        width: 100%;
        height: 8.4px;
        cursor: pointer;
        background: ${(props) => props.theme.background.highlight};
        border-radius: 5px;
        border: 1px solid ${(props) => props.theme.border.primary};
        box-shadow: 0 1px 10px 1px ${(props) => props.theme.shadow.opacity};
        transition: background 100ms ease-in-out;

        &:hover {
            cursor: pointer;
        }
    }
`