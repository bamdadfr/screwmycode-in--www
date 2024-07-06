import React, {ReactElement} from 'react';
import {ThemeProvider} from 'styled-components';
import {theme} from 'src/app/styles/theme';
import {Global} from 'src/app/styles/global';

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
