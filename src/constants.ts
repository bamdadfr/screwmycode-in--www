import {z} from 'zod';

export const IS_DEV_ENV = process.env.NODE_ENV === 'development';

export const API_BASE_URL = IS_DEV_ENV
  ? 'http://localhost:8000'
  : 'https://api.screwmycode.in';

export const TITLE_SEPARATOR = '|';

export const LOCAL_STORAGE_KEY = z.enum([
  'JWT',
  'AUDIO_VOLUME',
  'AUDIO_SPEED',
  'LIKES',
]);
