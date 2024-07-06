import styled from 'styled-components';
import {Icon} from '@iconify/react';
import {flexCenter, hoverLink} from 'src/app/styles/styles';

const paddingHorizontal = 7;
const gap = 3;

export const Container = styled.div`
  ${flexCenter};
  gap: ${gap}px;

  padding: ${gap}px ${paddingHorizontal}px;

  background: ${(props) => props.theme.background.primary};
  color: ${(props) => props.theme.primary};

  font-size: 2em;
`;

export const Side = styled.div`
  ${flexCenter};
  gap: ${gap}px;

  position: fixed;
  ${hoverLink};
`;

export const Left = styled(Side)`
  left: ${paddingHorizontal}px;
`;

export const Right = styled(Side)`
  right: ${paddingHorizontal}px;
`;

export const Podium = styled(Icon)`
  font-size: 91%;
  transform: translate(4px, -3px);
`;
