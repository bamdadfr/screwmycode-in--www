import React, {type ReactElement} from 'react';
import {Global} from 'src/app/styles/global';
import {theme} from 'src/app/styles/theme';
import {ThemeProvider} from 'styled-components';

interface WithThemeProps {
  children: ReactElement;
}

/**
 * Wrapper component for styled-components
 */
export function ThemeWrapper({children}: WithThemeProps): ReactElement {
  return (
    <ThemeProvider theme={theme}>
      <Global />
      {children}
    </ThemeProvider>
  );
}
