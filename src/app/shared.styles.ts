import {mediaQueries} from 'src/app/styles/breakpoints';
import {css} from 'styled-components';

export const centerFlex = css`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const p = 14;
export const addPadding = css`
  padding: ${p - 4}px ${p}px;
`;

export const addFontSizes = css`
  ${mediaQueries.below.tablet} {
    font-size: 20px;
  }

  ${mediaQueries.above.tablet} {
    font-size: 24px;
  }

  ${mediaQueries.above.desktop} {
    font-size: 28px;
  }
`;

export const addColorsDefault = css`
  color: ${(props) => props.theme.primary};
  background: ${(props) => props.theme.background.primary};
`;
