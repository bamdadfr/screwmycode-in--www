import styled from 'styled-components';
import {widths} from 'src/app/styles/widths';
import {mediaQueries} from 'src/app/styles/breakpoints';

export const Container = styled.div`
  position: fixed;

  display: flex;
  justify-content: center;
  align-items: center;

  width: 100vw;
  height: 100vh;

  color: ${(props) => props.theme.primary};
  background: ${(props) => props.theme.background.primary};
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
