import {Icon} from '@iconify/react';
import {addHoverLink, addMargins, centerFlex} from 'src/app/shared.styles';
import styled from 'styled-components';

const p = 14;

export const Container = styled.div`
  ${centerFlex};
  ${addMargins};
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
  right: ${p}px;
`;

export const Podium = styled(Icon)`
  font-size: 91%;
  transform: translate(4px, -1px);
`;
