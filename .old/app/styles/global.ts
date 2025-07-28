import '@fontsource/noto-sans';

import {addColorsDefault, addFontSizes} from 'src/_old/app/shared.styles';
import {createGlobalStyle} from 'styled-components';

// noinspection CssUnusedSymbol
export const Global = createGlobalStyle`
  html {
    font-family: 'Noto Sans', sans-serif;
    ${addColorsDefault};
    ${addFontSizes};
  }

  body {
    overflow: hidden
  }

  // scrollbars
  &::-webkit-scrollbar {
    width: 12px;
  }

  &::-webkit-scrollbar-thumb {
    background: ${({theme}) => theme.gray};
    border-radius: 10px;
    border: 3px transparent solid;
    background-clip: padding-box;

    &:hover {
      background: ${({theme}) => theme.darkGray};
      border-radius: 10px;
      border: 3px transparent solid;
      background-clip: padding-box;
    }
  }

  &::-webkit-scrollbar-thumb {
  }

  &::-webkit-scrollbar-track {
    background: ${({theme}) => theme.black};
  }

  .grecaptcha-badge {
    visibility: hidden;
  }
`;
