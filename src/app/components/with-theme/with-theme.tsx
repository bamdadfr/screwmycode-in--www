import React, {ReactElement} from 'react';
import {ThemeProvider} from 'styled-components';
import {Global} from '../../styles/global';
import {theme} from '../../styles/theme';
import {breakpoints} from '../../styles/breakpoints';

interface WithThemeProps {
  children: ReactElement | ReactElement[];
}

/**
 * Wrapper component for styled-components
 *
 * @todo should be lower case to wrap the whole component, not the body
 */
export function WithTheme({children}: WithThemeProps): ReactElement {
  return (
    <>
      <ThemeProvider theme={{...breakpoints, ...theme}}>
        <Global />
        {children}
      </ThemeProvider>
    </>
  );
}
