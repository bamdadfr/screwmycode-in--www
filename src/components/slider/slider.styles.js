import styled from 'styled-components'

export const StyledContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 15px;
    background: transparent;
    width: 400px;
`

export const StyledSlider = styled.input`
    width: 500px;
    background: transparent;

    &::-moz-range-thumb {
        box-shadow: 1px 1px 1px #000000, 0 0 1px #0d0d0d;
        border: 1px solid #000000;
        height: 30px;
        width: 10px;
        border-radius: 1px;
        background: #ffffff;
        cursor: pointer;
    }

    &::-moz-range-track {
        width: 100%;
        height: 8.4px;
        cursor: pointer;
        box-shadow: 1px 1px 1px #000000, 0 0 1px #0d0d0d;
        background: #232323;
        border-radius: 1.3px;
        border: 0.2px solid #010101;
    }

    @media (max-width: 768px) {
        .controls-slider input[type="range"] {
            width: 500px;
        }
    }

    @media (max-width: 600px) {
        .controls-slider input[type="range"] {
            width: 300px;
        }
    }
`