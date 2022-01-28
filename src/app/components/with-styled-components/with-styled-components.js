import React from 'react';
import PropTypes from 'prop-types';
import {ThemeProvider} from 'styled-components';
import {Global} from '../../styles/global';
import {Theme} from '../../styles/theme';
import {Breakpoints} from '../../styles/breakpoints';

const propTypes = {
  children: PropTypes.node.isRequired,
};

/**
 * Wrapper component for styled-components
 *
 * @param {React.ReactNode} children - The children of the component
 * @returns {React.ReactElement} - Rendered component
 */
export function WithStyledComponents({children}) {
  return (
    <>
      <ThemeProvider theme={{...Breakpoints, ...Theme}}>
        <Global />
        {children}
      </ThemeProvider>
    </>
  );
}

WithStyledComponents.propTypes = propTypes;
