import styled from 'styled-components'

export const StyledContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 1em;
    background: transparent;
    width: 90%;
`

export const StyledSlider = styled.input`
    width: 100%;
    
    &::-moz-range-thumb {
        //box-shadow: 1px 1px 1px #000000, 0 0 1px #0d0d0d;
        box-shadow: 1px 1px 1px ${(props) => props.theme.background.primary},
        0 0 1px ${(props) => props.theme.background.highlight};
        //border: 1px solid #000000;
        border: 1px solid ${(props) => props.theme.border.primary};
        height: 30px;
        width: 10px;
        border-radius: 1px;
        //background: #ffffff;
        background: ${(props) => props.theme.primary};
        cursor: pointer;
    }

    &::-moz-range-track {
        width: 100%;
        height: 8.4px;
        cursor: pointer;
        //box-shadow: 1px 1px 1px #000000, 0 0 1px #0d0d0d;
        box-shadow: 1px 1px 1px ${(props) => props.theme.background.primary}, 
        0 0 1px ${(props) => props.theme.background.highlight};
        //background: #232323;
        background: ${(props) => props.theme.background.highlight};
        border-radius: 1.3px;
        //border: 0.2px solid #010101;
        border: 1px solid ${(props) => props.theme.border.primary};
    }
`