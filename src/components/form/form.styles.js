import styled from 'styled-components'

export const StyledForm = styled.form`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    width: 100%;
    font-size: 1.1em;
`

export const StyledInput = styled.input`
    width: 90%;
    border: 1px solid #606060;
    padding: 3px 0 0 5px;
    color: #efefef;
    background: rgba(0, 0, 0, 0.6);
`

export const StyledSubmit = styled.input`
    margin-top: 1em;
    padding: 3px 6px;
    border: 1px solid #606060;
    color: #959595;
    background: rgba(0, 0, 0, .6);

    &:hover {
        transition: color 200ms ease-in-out;
        color: white;
    }
`
