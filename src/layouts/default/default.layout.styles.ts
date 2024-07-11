import {addColorsDefault, addFontSizes} from 'src/app/shared.styles';
import {mediaQueries} from 'src/app/styles/breakpoints';
import {widths} from 'src/app/styles/widths';
import styled from 'styled-components';

export const DefaultLayoutContainer = styled.div`
  width: 100vw;
  height: 100vh;

  display: grid;
  grid-template-rows: auto 1fr;


  ${addColorsDefault}
  ${addFontSizes}
}
`;

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  height: 100%;

  text-align: center;
  font-size: 1.1em;

  ${mediaQueries.below.tablet} {
    width: ${widths.mobile};
  }

  ${mediaQueries.above.tablet} {
    width: ${widths.tablet};
  }

  ${mediaQueries.above.desktop} {
    width: ${widths.desktop};
  }

  ${mediaQueries.above.widescreen} {
    width: ${widths.widescreen};
  }

  ${mediaQueries.above.fullhd} {
    width: ${widths.fullhd};
  }
`;
