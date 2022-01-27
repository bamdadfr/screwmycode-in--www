import styled from 'styled-components';

export const TextLink = styled.a`
  font-weight: ${({bold}) => bold ? '600' : 'inherit'};

  color: ${(props) => props.theme.highlight};

  border-bottom: ${(props) => {
    if (props.underline) {
      return `0.15em solid ${props.theme.highlight}`;
    }

    return 'none';
  }};

  &:hover {
    border-bottom: ${(props) => {
    if (props.underlineOnHover) {
      return `0.15em solid ${props.theme.highlight}`;
    }

    return 'none';
  }};
  }
`;
