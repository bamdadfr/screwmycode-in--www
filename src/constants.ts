const isEnvProduction = process.env.NODE_ENV === 'production';

export const API_BASE_URL = isEnvProduction
  ? 'https://api.screwmycode.in'
  : 'http://localhost:8000';

export const TITLE_SEPARATOR = '|';
