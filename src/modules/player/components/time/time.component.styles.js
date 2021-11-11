import styled from 'styled-components';

export const Container = styled.div`
  justify-content: center;
  white-space: nowrap;
  transform: translateY(${(props) => props.y ? `${props.y}px` : 0});

  > span {
    color: ${(props) => props.theme.highlight};
  }

  z-index: -1;
`;
