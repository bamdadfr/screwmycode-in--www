import styled from 'styled-components'

export const Container = styled.div`
    display: grid;
    justify-content: center;
    align-items: center;
    grid-template-columns: 1fr 1fr;
    grid-gap: 1em;

    width: 100%;

    transform: translateX(0.5em);
`

export const ImageContainer = styled.div`
    display: flex;
    justify-self: flex-end;
    align-items: flex-start;

    position: relative;

    width: 4em;
    height: 10em;

    transform: translateX(-1.5em);
`

export const TextContainer = styled.div`
    display: flex;
    justify-content: flex-end;
    align-items: flex-start;
    flex-direction: column;

    height: 100%;
    width: 100%;

    text-align: left;
    
    > h2 {
        height: 3em;
    }

    > div {
        height: 40px;
        font-size: 0.8em;
    }
`

export const TextLink = styled.a`
    font-weight: 600;
    color: ${(props) => props.theme.highlight};
    border-bottom: 0.15em solid ${(props) => props.theme.highlight};
`