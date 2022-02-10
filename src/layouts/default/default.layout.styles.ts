import styled from 'styled-components';
import {widths} from '../../app/styles/widths';
import {mediaQueries} from '../../app/styles/breakpoints';

export const Container = styled.div`
  position: fixed;

  display: grid;
  justify-content: center;
  align-items: center;
  grid-template-rows: repeat(2, 1fr);

  width: 100vw;
  height: 100vh;

  color: ${(props) => props.theme.primary};
  background: ${(props) => props.theme.background.primary};
`;

export const Wrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;

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
