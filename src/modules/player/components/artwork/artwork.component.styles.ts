import {mediaQueries} from 'src/app/styles/breakpoints';
import {widths} from 'src/app/styles/widths';
import {mapRange} from 'src/utils/map-range/map-range';
import styled from 'styled-components';

const getFilter = ({sepia, hueRotate, saturate, blur}) => `
      sepia(${sepia}%)
      hue-rotate(${hueRotate}deg)
      saturate(${saturate}%)
      // blur(${blur}px)
      opacity(0.618)
      brightness(0.618)
    `;

export const Container = styled.span<{speed: string;}>`
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

  // filters
  filter: ${({speed}) => {
    const s = parseFloat(speed);
    const sepia = Math.round(mapRange(s, 0.84, 1, 100, 0, true));
    const hueRotate = Math.round(mapRange(s, 0.84, 1, 250, 0, true));
    const saturate = Math.round(mapRange(s, 0.84, 1, 500, 100, true));
    const blur = Math.round(mapRange(s, 0.84, 1, 5, 1, true));

    return getFilter({sepia, hueRotate, saturate, blur});
  }};
`;
