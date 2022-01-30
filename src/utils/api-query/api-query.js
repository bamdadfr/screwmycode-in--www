import ky from 'ky';
import {isEnvProduction} from '../is-env-production/is-env-production';

/**
 * @param {string} query - Query and parameters to send to the API
 * @returns {Promise<object>} - Response from the API
 */
export async function apiQuery(query) {
  let base;

  if (isEnvProduction()) {
    base = 'https://api.screwmycode.in';
  } else {
    base = 'http://localhost:3000';
  }

  return await ky.get(`${base}${query}`).json();
}
