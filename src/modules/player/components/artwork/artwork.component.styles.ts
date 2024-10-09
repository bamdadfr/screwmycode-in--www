import {centerFlex, maximize} from 'src/app/shared.styles';
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
  ${centerFlex};
  ${maximize};

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
