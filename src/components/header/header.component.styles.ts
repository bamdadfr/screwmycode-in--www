import {Icon} from '@iconify/react';
import {addHoverLink, centerFlex, headerHeight, p} from 'src/app/shared.styles';
import styled from 'styled-components';

export const Container = styled.div`
  ${centerFlex};
  height: ${headerHeight};
`;

const SidePrimitive = styled.div`
  position: fixed;
  ${centerFlex};
  gap: 0.1em;

  ${addHoverLink};
  font-size: 120%;
`;

export const Left = styled(SidePrimitive)`
  left: ${p}px;
`;

export const Right = styled(SidePrimitive)`
  right: ${p + 4}px;
`;

export const Podium = styled(Icon)`
  font-size: 91%;
  transform: translate(4px, -1px);
`;
