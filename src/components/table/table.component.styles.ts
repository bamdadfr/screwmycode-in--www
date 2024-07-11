import {addVerticalScroll} from 'src/app/shared.styles';
import styled from 'styled-components';

export const Container = styled.div`
  ${addVerticalScroll};
`;

export const Item = styled.div`
  display: grid;
  align-items: center;
  justify-content: center;
  grid-template-columns: 6em 1fr 5em;

  transition:
    color 200ms ease-in-out,
    background 200ms ease-in-out;

  &:hover {
    cursor: pointer;
    color: ${(props) => props.theme.highlight};
    background: ${(props) => props.theme.background.highlight};
  }
`;

export const Button = styled.button`
  font-size: 2em;
  transform: translateY(5px);
`;
