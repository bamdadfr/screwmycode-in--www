import {type SliderComponentProps} from 'src/components/slider/slider.component';
import styled, {css} from 'styled-components';

const config = {
  trackW: '100%',
  // 'trackH': '7px',
  trackH: '0.5em',
  thumbD: '1.5em',
  thumbDV: 1.5,
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
  box-shadow:
    1px 1px 1px ${(props) => props.theme.background.primary},
    0 0 1px ${(props) => props.theme.background.highlight};
`;

const getProgress = (props: SliderComponentProps) =>
  (props.value - props.min) / (props.max - props.min);
const getBuffered = (props: SliderComponentProps) =>
  (props?.buffered ?? 0 - props.min) / (props.max - props.min);

// @see https://codepen.io/thebabydino/pen/goYYrN
// @ts-expect-error dumb
// noinspection CssUnresolvedCustomProperty
export const Input = styled.input.attrs((props) => ({
  style: {
    '--progress': getProgress(props as SliderComponentProps),
    '--buffered': getBuffered(props as SliderComponentProps),
  },
}))<SliderComponentProps>`
  &,
  &::-webkit-slider-thumb {
    -webkit-appearance: none;
  }

  margin: 0;
  padding: 0;
  width: ${config.trackW};
  height: ${config.thumbD};
  background: transparent;
  font:
    1em/1 arial,
    sans-serif;

  --progress-width: calc(
    0.5 * ${config.thumbD} + var(--progress) * (100% - ${config.thumbD})
  );
  --buffered-width: calc(var(--buffered) * 100%);

  &:hover {
    cursor: pointer;
  }

  // track

  &::-webkit-slider-runnable-track {
    ${track};

    background: linear-gradient(
      to right,
      ${(props) => props.theme.highlight} 0,
      ${(props) => props.theme.highlight} var(--progress-width),
      ${(props) => props.theme.buffered} var(--progress-width),
      ${(props) => props.theme.buffered} var(--buffered-width),
      ${(props) => props.theme.background.highlight} var(--buffered-width),
      ${(props) => props.theme.background.highlight} 100%
    );
  }

  &::-moz-range-track {
    ${track};

    background: linear-gradient(
      to right,
      ${(props) => props.theme.buffered} 0,
      ${(props) => props.theme.buffered} var(--buffered-width),
      ${(props) => props.theme.background.highlight} var(--buffered-width),
      ${(props) => props.theme.background.highlight} 100%
    );
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
    margin-top: calc(0.5 * (${config.trackH} - ${config.thumbD}));
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
