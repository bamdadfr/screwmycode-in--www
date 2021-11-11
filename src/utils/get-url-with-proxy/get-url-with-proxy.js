export const productionProxy = 'https://screwmycode-in--cors.herokuapp.com';

export const developmentProxy = 'http://localhost:8080';

/**
 * Get proxified url
 *
 * @param {string} url - url to be proxified
 * @returns {string} - proxified url
 */
export function getUrlWithProxy (url) {
  if (typeof url !== 'string') {
    throw new Error ('url is not a string');
  }

  const isProduction = process.env.NODE_ENV === 'production';
  let proxy = productionProxy;

  if (!isProduction) {
    proxy = developmentProxy;
  }

  return `${proxy}/${url}`;
}
