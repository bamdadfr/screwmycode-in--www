const providers = {
  youtube: 'YouTube',
  soundcloud: 'SoundCloud',
};

/**
 * Get the provider name from the URL
 *
 * @param {object} router - The router object
 * @returns {string} - The provider name. Either 'youtube' or 'soundcloud'
 */
export function getProviderFromRouter(router) {
  return providers[router.pathname.split('/')[1]];
}
