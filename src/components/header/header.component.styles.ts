import {Icon} from '@iconify/react';
import {
  addColorsDefault,
  addHoverLink,
  addPaddingRight,
  addPaddings,
  centerFlex,
  p,
} from 'src/app/shared.styles';
import styled from 'styled-components';

export const Container = styled.div`
  ${centerFlex};
  ${addPaddings};
  width: calc(100% - ${p}px);
  position: fixed;
  z-index: 100;
  ${addColorsDefault};
  ${addPaddingRight};
`;

const Side = styled.div`
  position: fixed;
  ${centerFlex};
  gap: 0.1em;

  ${addHoverLink};
  font-size: 120%;
`;

export const Left = styled(Side)`
  left: ${p}px;
`;

export const Right = styled(Side)`
  right: ${p + 4}px;
`;

export const Podium = styled(Icon)`
  font-size: 91%;
  transform: translate(4px, -1px);
`;
