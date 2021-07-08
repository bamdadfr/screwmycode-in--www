import styled from 'styled-components'

export const StyledContainer = styled.div`
    height: 3em;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    padding-left: 1px;

    & > audio {
        width: 100%;
    }
`