import {Icon} from '@iconify/react';
import {addPadding, centerFlex} from 'src/app/shared.styles';
import {hoverLink} from 'src/app/styles/styles';
import styled from 'styled-components';

const p = 14;

export const Container = styled.div`
  ${centerFlex};
  ${addPadding};
`;

const Side = styled.div`
  ${centerFlex};
  gap: 3px;

  position: fixed;
  ${hoverLink};
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
