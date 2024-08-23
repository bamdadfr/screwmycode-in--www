import {centerFlex, maximize, p} from 'src/app/shared.styles';
import styled, {css} from 'styled-components';

export const Container = styled.div`
  ${centerFlex};
  ${maximize};
`;

const width = css`
  width: 4em;
`;

export const ImageContainer = styled.div`
  display: flex;
  justify-self: flex-end;

  ${width};
  height: 10em;

  transform: translate3d(-${p}px, -${p * 4}px, 0);
`;

export const Text = styled.span`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  text-align: left;
  ${width};
`;
