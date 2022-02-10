import ky from 'ky';
import {isEnvProduction} from '../is-env-production/is-env-production';

export async function apiQuery(endpoint: string): Promise<Response> {
  let base;

  if (isEnvProduction()) {
    base = 'https://api.screwmycode.in';
  } else {
    // base = 'http://localhost:3000';
    base = 'https://api.screwmycode.in';
  }

  return await ky.get(`${base}${endpoint}`).json();
}
