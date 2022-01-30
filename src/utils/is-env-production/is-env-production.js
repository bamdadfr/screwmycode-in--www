/**
 * Utility function to check if the current environment is production.
 *
 * @returns {boolean} - true if the current environment is production
 */
export function isEnvProduction() {
  return process.env.NODE_ENV === 'production';
}
