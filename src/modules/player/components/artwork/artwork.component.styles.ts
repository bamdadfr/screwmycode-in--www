import styled from 'styled-components';
import {down, up} from 'styled-breakpoints';
import {mapRange} from '../../../../utils/map-range/map-range';
import {widths} from '../../../../app/styles/widths';

export const Container = styled.span <{speed: number;}>`
  // global
  object-fit: cover;
  position: fixed;
  z-index: -1;
  transform: translate(-50%, -50%);
  display: inline-flex;
  align-items: center;
  justify-content: center;

  // sizes
  ${down('md')} {
    width: calc(${widths.sm} + 3em);
  }

  ${up('md')} {
    width: calc(${widths.md} + 2em);
  }

  ${up('lg')} {
    width: calc(${widths.lg} + 2em);
  }

  ${up('xl')} {
    width: calc(${widths.xl} + 2em);
  }

  ${up('xxl')} {
    width: calc(${widths.xxl} + 2em);
  }

  // filters
  filter: ${({speed}) => {
    const sepia = Math.round(mapRange(speed, 0.84, 1, 100, 0, true));
    const hueRotate = Math.round(mapRange(speed, 0.84, 1, 250, 0, true));
    const saturate = Math.round(mapRange(speed, 0.84, 1, 500, 100, true));
    const blur = Math.round(mapRange(speed, 0.84, 1, 5, 1, true));

    return `
      sepia(${sepia}%)
      hue-rotate(${hueRotate}deg)
      saturate(${saturate}%)
      // blur(${blur}px)
      opacity(0.618)
      brightness(0.618)
    `;
  }};
`;
