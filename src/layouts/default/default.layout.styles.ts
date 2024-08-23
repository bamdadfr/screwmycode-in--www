import {addVerticalScroll, headerHeight} from 'src/app/shared.styles';
import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 100vw;
  height: calc(100vh - ${headerHeight});
  ${addVerticalScroll};
`;
