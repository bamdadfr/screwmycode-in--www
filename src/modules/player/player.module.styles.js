import styled from 'styled-components'

export const Container = styled.div`
    display: grid;
    grid-template-columns: 2em 2em 1fr 8em 2em 6em;
    grid-gap: 0.25em;
    align-items: center;

    width: 100%;

    padding: 0.5em 0;

    font-size: 0.75em;

    svg {
        font-size: 2em;
    }

    * {
        display: flex;
        user-select: none;
    }
`

export const Button = styled.button`
    touch-action: manipulation;
    transition: background .3s ease;
    transform: translateY(${(props) => props.y ? `${props.y}px` : 0});

    &:hover {
        background: ${(props) => props.theme.shadow.opacity};
    }
`