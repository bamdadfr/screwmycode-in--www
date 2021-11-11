import styled, { css } from 'styled-components';

const config = {
  'trackW': '100%',
  // 'trackH': '7px',
  'trackH': '0.5em',
  'thumbD': '1.5em',
  'thumbDV': 1.5,
};

const track = css`
  box-sizing: border-box;
  border: none;
  width: ${config.trackW};
  height: ${config.trackH};
  background: ${(props) => props.theme.background.highlight};
  border-radius: 7px;
  box-shadow: 0 1px 10px 1px ${(props) => props.theme.shadow.opacity};
`;

const progress = css`
  height: ${config.trackH};
  background: ${(props) => props.theme.highlight};
  border-radius: 7px;
`;

const handle = css`
  box-sizing: border-box;
  width: ${config.thumbD};
  height: ${config.thumbD};
  border-radius: 50%;
  border: 3px solid;
  background: ${(props) => props.theme.background.primary};
  box-shadow: 1px 1px 1px ${(props) => props.theme.background.primary},
  0 0 1px ${(props) => props.theme.background.highlight};
`;

const range = (props) => props.max - props.min;
const ratio = (props) => (props.value - props.min) / range (props);

/**
 * @param {object} props react component props
 * @see https://codepen.io/thebabydino/pen/goYYrN
 * @returns {object} styled component
 */
export const Input = styled.input.attrs ((props) => ({
  'style': {
    '--ratio': ratio (props),
  },
}))`
  &, &::-webkit-slider-thumb {
    -webkit-appearance: none;
  }

  margin: 0;
  padding: 0;
  width: ${config.trackW};
  height: ${config.thumbD};
  background: transparent;
  font: 1em/1 arial, sans-serif;

  &:hover {
    cursor: pointer;
  }

  // track
  &::-webkit-slider-runnable-track {
    ${track};
    --sx: calc(.5 * ${config.thumbD} + var(--ratio) * (100% - ${config.thumbD}));
    background: linear-gradient(${(props) => props.theme.highlight}, ${(props) => props.theme.highlight})
      0/ var(--sx) 100% no-repeat ${(props) => props.theme.background.highlight};
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
`;
