import {
  addPaddingRight,
  addPaddings,
  addPaddingTop,
  addVerticalScroll,
} from 'src/app/shared.styles';
import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;

  ${addPaddings};
  ${addVerticalScroll};
  ${addPaddingTop};
  ${addPaddingRight};
`;
