import styled from 'styled-components';
import {down} from 'styled-breakpoints';

export const Container = styled.div`
  width: 100%;
`;

export const PlayerContainer = styled.div`
  display: grid;
  grid-gap: 0.25em;
  align-items: center;

  width: 100%;

  padding: 0.5em 0;

  font-size: 0.75em;

  svg {
    font-size: 2em;
  }

  * {
    display: flex;
    user-select: none;
  }

  grid-template-columns: 2em 2em 1fr 8em 2em 6em;

  > *:nth-child(1) {
    grid-column-start: 1;
    grid-row-start: 1;
    white-space: nowrap;
    transform: translate3d(.3em, .45em, 0);
  }

  > *:nth-child(6) {
    grid-column-start: 5;
    grid-row-start: 1;
    z-index: 1;
  }

  > *:nth-child(7) {
    grid-column-start: 6;
    grid-row-start: 1;
    z-index: 1;
  }

  > *:nth-child(2) {
    grid-column-start: 1;
    grid-row-start: 2;
  }

  > *:nth-child(3) {
    grid-column-start: 2;
    grid-row-start: 2;
  }

  > *:nth-child(4) {
    grid-column-start: 3;
    grid-column-end: 6;
    grid-row-start: 2;
  }

  > *:nth-child(5) {
    grid-column-start: 6;
    grid-column-end: 7;
    grid-row-start: 2;
    justify-self: flex-end;
  }

  ${down('md')} {
    font-size: 0.9em;

    grid-template-columns: 2em 2em 1fr 6em;
    grid-gap: 0.25em;

    > *:nth-child(1) {
      grid-column-start: 1;
      grid-row-start: 1;
    }

    > *:nth-child(6) {
      grid-column-start: 3;
      grid-row-start: 1;
      justify-self: flex-end;
    }

    > *:nth-child(7) {
      grid-column-start: 4;
      grid-row-start: 1;
    }

    > *:nth-child(2) {
      grid-column-start: 1;
      grid-row-start: 2;
    }

    > *:nth-child(3) {
      grid-column-start: 2;
      grid-row-start: 2;
    }

    > *:nth-child(4) {
      grid-column-start: 3;
      grid-column-end: 4;
      grid-row-start: 2;
    }

    > *:nth-child(5) {
      grid-column-start: 4;
      grid-row-start: 2;
      justify-self: inherit;
    }
  }
`;

export const Button = styled.button`
  touch-action: manipulation;
  transition: background .3s ease;
  transform: translateY(${(props) => props.y ? `${props.y}px` : 0});

  &:hover {
    background: ${(props) => props.theme.shadow.opacity};
  }
`;
