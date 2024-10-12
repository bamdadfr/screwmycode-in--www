import styled from 'styled-components';

const getBorder = (c: string) => `0.15em solid ${c}`;

export const TextLink = styled.a`
  color: ${(props) => props.theme.highlight};

  &:hover {
    border-bottom: ${({theme}) => getBorder(theme.highlight)};
  }
`;
