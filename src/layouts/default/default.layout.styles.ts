import {
  addColorsDefault,
  addFontSizes,
  addMargins,
  addVerticalScroll,
  centerFlex,
} from 'src/app/shared.styles';
import styled from 'styled-components';

export const DefaultLayoutContainer = styled.div`
  width: 100vw;
  height: 100vh;

  display: grid;
  grid-template-rows: auto 1fr;

  ${addColorsDefault};
  ${addFontSizes};
`;

export const NewWrapper = styled.div`
  ${centerFlex};
  ${addMargins};
  ${addVerticalScroll};
`;
