import styled from 'styled-components'

export const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 1em;
    width: 100%;

    * {
        user-select: none;
    }
`

export const Wrapper = styled.div`
    width: 6em;
    margin: 0 0.7em;
    text-align: center;
    display: flex;
    flex-direction: column;
`

export const InputTitle = styled.h2`
    font-size: 0.7em;
    text-transform: uppercase;
`

export const InputValue = styled.input`
    margin-top: 0.7em;
    text-align: center;
    color: ${(props) => props.theme.highlight};
    background: ${(props) => props.theme.background.highlight};
    text-transform: none;
    display: inline-block;
    line-height: 2em;
    border-radius: 3px;
    box-shadow: 0 1px 10px 1px ${(props) => props.theme.shadow.opacity};
    padding: 0 0.5em;
    font-weight: 600;
    font-size: 0.9em;
`