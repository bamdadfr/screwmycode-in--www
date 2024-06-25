import React, {ReactElement} from 'react';
import {ThemeProvider} from 'styled-components';
import {Global} from '../../styles/global';
import {theme} from '../../styles/theme';

interface WithThemeProps {
  children: ReactElement;
}

/**
 * Wrapper component for styled-components
 * @param root0
 * @param root0.children
 */
export function ThemeWrapper({children}: WithThemeProps): ReactElement {
  return (
    <ThemeProvider theme={theme}>
      <Global />
      {children}
    </ThemeProvider>
  );
}
