import {SignJWT} from 'jose';
import {cache} from 'react';
import {API_BASE_URL} from 'src/constants';
import {MediaDto, MediasResponse} from 'src/dtos';

export function prefixApiRoute(route: string) {
  return `${API_BASE_URL}${route}`;
}

export const generateToken = cache(async () => {
  const secret = new TextEncoder().encode(process.env.JWT_SECRET);

  const token = await new SignJWT({
    exp: Math.floor(Date.now() / 1000) + 24 * 60 * 60, // 24h
  })
    .setProtectedHeader({alg: 'HS256'})
    .sign(secret);

  return token;
});

export async function fetchMedias(token: string): Promise<MediaDto[]> {
  const route = prefixApiRoute('/v2/list/');

  const response = await fetch(route, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`,
    },
  });

  const result = await response.json();
  const {items} = MediasResponse.parse(result);

  return items.map((item) => ({
    ...item,
    audio: prefixApiRoute(item.audio),
    image: prefixApiRoute(item.image),
  }));
}

export async function createMedia(
  token: string,
  url: string,
): Promise<MediaDto> {
  const route = prefixApiRoute('/v2/create/');

  const response = await fetch(route, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`,
    },
    body: JSON.stringify({
      url,
    }),
  });

  const result = await response.json();
  const item = MediaDto.parse(result);

  return {
    ...item,
    audio: prefixApiRoute(item.audio),
    image: prefixApiRoute(item.image),
  };
}
