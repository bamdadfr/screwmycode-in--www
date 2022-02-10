import {createTheme} from 'styled-breakpoints';

// todo: remove dependency on styled-breakpoints
export const breakpoints = createTheme({
  xs: '0px',
  sm: '576px',
  md: '768px',
  lg: '992px',
  xl: '1200px',
  xxl: '1400px',
});
