import styled, { css } from 'styled-components'

const config = {
    'trackW': '100%',
    'trackH': '7px',
    'thumbD': '1.5em',
    'trackC': '#ccc',
    'filllC': '#95a',
}

const track = css`
    box-sizing: border-box;
    border: none;
    width: ${config.trackW};
    height: ${config.trackH};
    background: ${(props) => props.theme.grey};
    border-radius: 7px;
`

const progress = css`
    height: ${config.trackH};
    background: ${(props) => props.theme.highlight};
    border-radius: 7px;
`

const handle = css`
    box-sizing: border-box;
    width: ${config.thumbD};
    height: ${config.thumbD};
    border-radius: 50%;
    border: 3px solid;
    background: ${(props) => props.theme.background.primary};
`

/**
 * @param {object} props react component props
 * @see https://codepen.io/thebabydino/pen/goYYrN
 * @returns {object} styled component
 */
export const Input = styled.input`
    &, &::-webkit-slider-thumb {
        -webkit-appearance: none;
    }

    --min: ${(props) => props.min};
    --max: ${(props) => props.max};
    --val: ${(props) => props.value};

    --range: calc(var(--max) - var(--min));
    --ratio: calc((var(--val) - var(--min)) / var(--range));
    --sx: calc(.5 * ${config.thumbD} + var(--ratio) * (100% - ${config.thumbD}));

    margin: 0;
    padding: 0;
    width: ${config.trackW};
    height: ${config.thumbD};
    background: transparent;
    font: 1em/1 arial, sans-serif;

    // track
    &::-webkit-slider-runnable-track {
        ${track};
        background: linear-gradient(${(props) => props.theme.highlight}, ${(props) => props.theme.highlight})
            0/ var(--sx) 100% no-repeat ${(props) => props.theme.grey};
    }

    &::-moz-range-track {
        ${track};
    }

    &::-ms-track {
        ${track};
    }

    // progress
    &::-moz-range-progress {
        ${progress};
    }

    &::-ms-fill-lower {
        ${progress};
    }

    // handle
    &::-webkit-slider-thumb {
        margin-top: calc(.5 * (${config.trackH} - ${config.thumbD}));
        ${handle};
    }

    &::-moz-range-thumb {
        ${handle};
    }

    &::-ms-thumb {
        margin-top: 0;
        ${handle};
    }

    &::-ms-tooltip {
        display: none;
    }
`