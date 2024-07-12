import {mediaQueries} from 'src/app/styles/breakpoints';
import {widths} from 'src/app/styles/widths';
import styled, {css} from 'styled-components';

export const centerFlex = css`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const CenteredDiv = styled.div`
  ${centerFlex};
`;

export const p = 14;
export const addPaddings = css`
  padding: ${p - 4}px ${p}px;
`;

export const addFontSizeSmall = css`
  font-size: 16px;
`;

export const addFontSizeMedium = css`
  font-size: 18px;
`;

export const addFontSizeBig = css`
  font-size: 20px;
`;

export const addFontSizeGiant = css`
  font-size: 22px;
`;

export const addFontSizes = css`
  ${mediaQueries.below.tablet} {
    ${addFontSizeSmall};
  }

  ${mediaQueries.above.tablet} {
    ${addFontSizeMedium};
  }

  ${mediaQueries.above.desktop} {
    ${addFontSizeBig};
  }

  ${mediaQueries.above.fullhd} {
    ${addFontSizeGiant};
  }
`;

export const addColorsDefault = css`
  color: ${(props) => props.theme.primary};
  background: ${(props) => props.theme.background.primary};
`;

export const addVerticalScroll = css`
  overflow-x: hidden;
  overflow-y: auto;
`;

export const addPaddingTop = css`
  padding-top: ${p * 4}px;
`;

export const addPaddingRight = css`
  padding-right: ${p}px;
`;

export const addHoverLink = css`
  a {
    transition: color 200ms ease-in-out;

    &:hover {
      cursor: pointer;
      color: ${(props) => props.theme.highlight};
    }
  }
`;

export const addGap = css`
  gap: ${p}px;
`;

export const addGapDouble = css`
  gap: ${p * 2}px;
`;

export const maximize = css`
  width: 100%;
  height: 100%;
`;

export const addSquareWidths = css`
  ${mediaQueries.below.tablet} {
    width: calc(${widths.mobile} + 3em);
  }

  ${mediaQueries.above.tablet} {
    width: calc(${widths.tablet} + 2em);
  }

  ${mediaQueries.above.desktop} {
    width: calc(${widths.desktop} + 2em);
  }

  ${mediaQueries.above.widescreen} {
    width: calc(${widths.widescreen} + 2em);
  }

  ${mediaQueries.above.fullhd} {
    width: calc(${widths.fullhd} + 2em);
  }
`;
