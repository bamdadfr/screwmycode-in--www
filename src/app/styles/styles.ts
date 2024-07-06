import {css} from 'styled-components';

export const flexCenter = css`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const hoverLink = css`
  a {
    transition: color 200ms ease-in-out;

    &:hover {
      cursor: pointer;
      color: ${(props) => props.theme.highlight};
    }
  }
`;
