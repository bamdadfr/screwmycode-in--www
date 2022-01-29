import ky from 'ky';

/**
 * @param {string} query - Query and parameters to send to the API
 * @returns {Promise<object>} - Response from the API
 */
export async function apiQuery(query) {
  let base;

  if (process.env.NODE_ENV === 'production') {
    base = 'https://api.screwmycode.in';
  } else {
    base = 'http://localhost:3000';
  }

  return await ky.get(`${base}${query}`).json();
}
