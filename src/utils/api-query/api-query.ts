import ky from 'ky';
import {API_BASE_URL} from '../../constants';

export async function apiQuery<R>(endpoint: string): Promise<R> {
  return await ky.get(`${API_BASE_URL}${endpoint}`).json();
}
