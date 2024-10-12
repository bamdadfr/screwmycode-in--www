const getBelow = (v) => `@media screen and (max-width: ${v - 1}px)`;
const getAbove = (v) => `@media screen and (min-width: ${v}px)`;

const breakpoints = {
  mobile: 576,
  tablet: 768,
  desktop: 992,
  widescreen: 1200,
  fullhd: 1400,
};

export const mediaQueries = {
  below: {
    tablet: getBelow(breakpoints.tablet),
  },
  above: {
    tablet: getAbove(breakpoints.tablet),
    desktop: getAbove(breakpoints.desktop),
    widescreen: getAbove(breakpoints.widescreen),
    fullhd: getAbove(breakpoints.fullhd),
  },
};
