import styled from 'styled-components'

export const Slider = styled.div`
    position: relative;

    display: flex;
    justify-content: flex-start;

    width: 100%;
    height: 7px;
`

export const Bar = styled.div`
    width: 100%;
    height: 100%;

    border-radius: 7px;
    background: ${(props) => props.theme.grey};
`

export const BarColor = styled.div`
    position: absolute;

    width: calc(${(props) => props.value}px - 15px); // [15px, width]
    height: 100%;

    border-bottom-left-radius: 7px;
    border-top-left-radius: 7px;

    border-color: ${(props) => props.theme.highlight};
    background: ${(props) => props.theme.highlight};
`

export const Handle = styled.div`
    position: absolute;

    width: 20px;
    height: 20px;

    top: -6px;
    left: calc(${(props) => props.value}px - 20px); // [19px, width]

    border: 3px solid;
    cursor: pointer;
    background-color: ${(props) => props.theme.background.primary};
    border-radius: 100%;
`