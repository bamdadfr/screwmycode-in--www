import styled from 'styled-components'

export const StyledContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 10px 5px -15px 5px;

    > div {
        width: 100px;
        text-align: center;

        > input {
            margin-top: 5px;
            width: 90px;
            height: 30px;
            text-align: center;
            border: 0;
            font-size: 1.2rem;
            font-weight: 900;
            color: ${props => props.theme.colors.white};
            background: transparent;
        }
    }
`