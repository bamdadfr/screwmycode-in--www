/**
 * @name Breakpoints
 * @description breakpoints styles as string to use in media queries
 * @type {object.<string, string>}
 */
export const Breakpoints = {
    'mobile': `(max-width: ${768 - 1}px)`,
    'tablet': `(min-width: ${768}px)`,
    'desktop': `(min-width: ${1024}px)`,
    'widescreen': `(min-width: ${1216}px)`,
    'fullhd': `(min-width: ${1408}px)`,
}