/**
 * Utility function to check if the current environment is production.
 */
export function isEnvProduction(): boolean {
  return process.env.NODE_ENV === 'production';
}
