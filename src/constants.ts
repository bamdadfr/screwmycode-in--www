import {z} from 'zod';

export const IS_DEV_ENV = process.env.NODE_ENV === 'development';
export const GA_TRACKING_ID = 'G-SSGL1QBMBJ';
export const ERROR_TIMEOUT = 600;

export const API_BASE_URL = IS_DEV_ENV
  ? 'http://localhost:8000'
  : 'https://api.screwmycode.in';

export const TITLE_SEPARATOR = '|';

export const TEXTURE_SCALE = 0.064;

export const LOCAL_STORAGE_KEY = z.enum([
  'JWT',
  'AUDIO_VOLUME',
  'AUDIO_SPEED',
  'LIKES',
]);
