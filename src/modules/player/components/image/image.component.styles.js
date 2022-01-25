import styled from 'styled-components';
import {mapRange} from '../../../../utils/map-range/map-range';

export const Image = styled.img`
  width: 60%;
  max-width: 400px;
  position: fixed;
  transform: translate(-50%, -50%);
  z-index: -1;
  filter: ${({speed}) => {
    const sepia = Math.round(mapRange(speed, 0.84, 1, 100, 0, true));
    const hueRotate = Math.round(mapRange(speed, 0.84, 1, 280, 0, true));
    const saturate = Math.round(mapRange(speed, 0.84, 1, 500, 100, true));
    const blur = Math.round(mapRange(speed, 0.84, 1, 10, 3, true));

    return `
      sepia(${sepia}%)
      hue-rotate(${hueRotate}deg)
      saturate(${saturate}%)
      blur(${blur}px)
      opacity(0.3)
    `;
  }};
`;
