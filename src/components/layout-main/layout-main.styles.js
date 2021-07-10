import styled from 'styled-components'

export const StyledContainer = styled.div`
    position: fixed;
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    flex-direction: column;
    
    color: ${props => props.theme.colors.white};
    background: black;
`

export const StyledTitle = styled.div`
    font-size: 3em;
    font-weight: 900;
`