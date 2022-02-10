import styled from 'styled-components';
import {down} from 'styled-breakpoints';

export const Title = styled.h1`
  display: flex;
  justify-content: center;
  align-items: flex-end;

  height: 100%;

  margin-bottom: 3em;

  font-size: 3em;
  font-weight: 900;

  & a {
    transition: color 200ms ease-in-out;

    &:hover {
      color: ${(props) => props.theme.highlight};
    }
  }

  ${down('md')} {
    font-size: 2em;
  }
`;
