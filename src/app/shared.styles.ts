import {mediaQueries} from 'src/app/styles/breakpoints';
import styled, {css} from 'styled-components';

export const p = 14;
export const headerHeight = `${p * 4}px`;

export const centerFlex = css`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const CenteredDiv = styled.div`
  ${centerFlex};
`;

export const addHorizontalPadding = css`
  padding: 0 ${p}px;
`;

export const addFontSizeSmall = css`
  font-size: 14px;
`;

export const addFontSizeMedium = css`
  font-size: 16px;
`;

export const addFontSizeBig = css`
  font-size: 18px;
`;

export const addFontSizeGiant = css`
  font-size: 20px;
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
