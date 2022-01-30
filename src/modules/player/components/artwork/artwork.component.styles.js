import styled from 'styled-components';
import {down, up} from 'styled-breakpoints';
import {mapRange} from '../../../../utils/map-range/map-range';
import {Widths} from '../../../../app/styles/widths';

export const Container = styled.span`
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
    width: calc(${Widths.sm} + 3em);
  }

  ${up('md')} {
    width: calc(${Widths.md} + 2em);
  }

  ${up('lg')} {
    width: calc(${Widths.lg} + 2em);
  }

  ${up('xl')} {
    width: calc(${Widths.xl} + 2em);
  }

  ${up('xxl')} {
    width: calc(${Widths.xxl} + 2em);
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
