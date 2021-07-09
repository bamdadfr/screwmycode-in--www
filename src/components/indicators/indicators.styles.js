import styled from 'styled-components'

export const StyledContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 10px 5px -15px 5px;

    * {
        user-select: none;
    }
`

export const StyledTitle = styled.div`
    width: 100px;
    text-align: center;
    display: flex;
    flex-direction: column;
`

export const StyledValue = styled.div`
    margin-top: 5px;
    width: 100%;
    height: 30px;
    text-align: center;
    border: 0;
    font-size: 1.2rem;
    font-weight: 900;
    color: ${props => props.theme.colors.white};
    background: transparent;
`