import {API_BASE_URL} from '../../constants';

export async function apiQuery<R>(endpoint: string): Promise<R> {
  const route = `${API_BASE_URL}/${endpoint}`;
  const response = await fetch(route);
  return await response.json();
}
