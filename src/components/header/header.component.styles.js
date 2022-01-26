import styled from 'styled-components';

const Container = styled.div`
  position: fixed;
  z-index: 10;

  margin: 7px 7px;
  top: 0;

  display: flex;
  grid-gap: 3px;

  font-size: 2em;
  color: ${(props) => props.theme.primary};

  > button {
    transition: color 200ms ease-in-out;

    &:hover {
      cursor: pointer;
      color: ${(props) => props.theme.highlight};
    }
  }
`;

export const LeftContainer = styled(Container)`
  left: 0;
`;

export const RightContainer = styled(Container)`
  right: 0;
`;

export const PodiumButton = styled.button`
  font-size: 91%;
  transform: translateY(-3px);
  margin-left: 3px;
`;
