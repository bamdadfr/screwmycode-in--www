import styled from 'styled-components'

export const StyledForm = styled.form`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    width: 100%;
    font-size: 1.1em;
`

const BaseInput = styled.input`
    color: ${(props) => props.theme.highlight};
    background: ${(props) => props.theme.background.highlight};
    text-transform: none;
    display: inline-block;
    line-height: 2em;
    border-radius: 3px;
    box-shadow: 0 1px 10px 1px ${(props) => props.theme.shadow.opacity};
    padding: 0 0.5em;
`

export const StyledInput = styled (BaseInput)`
    width: 90%;
`

export const StyledSubmit = styled (BaseInput)`
    margin-top: 0.7em;
    font-weight: 600;
`
