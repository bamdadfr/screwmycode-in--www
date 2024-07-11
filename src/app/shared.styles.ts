import {mediaQueries} from 'src/app/styles/breakpoints';
import styled, {css} from 'styled-components';

export const centerFlex = css`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const CenteredDiv = styled.div`
  ${centerFlex};
`;

const p = 14;
export const addMargins = css`
  margin: ${p - 4}px ${p}px;
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
