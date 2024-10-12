import styled from 'styled-components';

export const Container = styled.div`
  justify-content: center;
  white-space: nowrap;

  > span {
    color: ${(props) => props.theme.highlight};
  }

  z-index: -1;
`;
