import {SignJWT} from 'jose';
import {API_BASE_URL} from 'src/constants';
import {type ListBody, ListResponse, type ListSortBy} from 'src/dtos';

async function generateToken() {
  const secret = new TextEncoder().encode(process.env.JWT_SECRET);

  const token = await new SignJWT({
    exp: Math.floor(Date.now() / 1000) + 24 * 60 * 60, // 24h
  })
    .setProtectedHeader({alg: 'HS256'})
    .sign(secret);

  return token;
}

export async function fetchListData(sortBy: ListSortBy) {
  const token = await generateToken();

  const route = `${API_BASE_URL}/v2/list/`;
  const body: ListBody = {
    range: 'all',
    sort_by: sortBy,
    limit: 50,
  };

  const response = await fetch(route, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`,
    },
    body: JSON.stringify(body),
  });

  const result = await response.json();
  const data = ListResponse.parse(result);
  return data;
}
