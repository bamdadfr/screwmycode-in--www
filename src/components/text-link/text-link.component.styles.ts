import styled from 'styled-components';

import {AnchorOptions} from './text-link.component';

const getBorder = (c) => `0.15em solid ${c}`;

export const TextLink = styled.a<AnchorOptions>`
  font-weight: ${({bold}) => bold ? '600' : 'inherit'};

  color: ${(props) => props.theme.highlight};

  border-bottom: ${(props) => {
    if (props.underline) {
      return getBorder(props.theme.highlight);
    }

    return 'none';
  }};

  &:hover {
    border-bottom: ${(props) => {
    if (props.underlineOnHover) {
      return getBorder(props.theme.highlight);
    }

    return 'none';
  }};
  }
`;
