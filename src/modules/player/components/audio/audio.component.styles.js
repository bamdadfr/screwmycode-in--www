import styled from 'styled-components'

export const Container = styled.div`
    height: 3em;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;

    & > audio {
        width: 100%;
    }
`