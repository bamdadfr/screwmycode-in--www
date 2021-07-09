import styled from 'styled-components'

export const StyledContainer = styled.div`
    position: fixed;
    z-index: 10;
    margin: 7px 7px;
    top: 0;
    left: 0;
    font-size: 2rem;
    color: #606060;

    > span {
        &:hover {
            color: #efefef;
            cursor: pointer;
        }

        &:not(:last-child) {
            margin-right: 7px;
        }

    }

`

