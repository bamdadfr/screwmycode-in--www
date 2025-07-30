import {SignJWT} from 'jose';
import {NextApiRequest, NextApiResponse} from 'next';
import {API_BASE_URL} from 'src/constants';
import {MediaItem} from 'src/dtos';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  const secret = new TextEncoder().encode(process.env.JWT_SECRET);
  const {mediaUrl} = req.body;

  const token = await new SignJWT({
    exp: Math.floor(Date.now() / 1000) + 60 * 60 * 1, // 1
  })
    .setProtectedHeader({alg: 'HS256'})
    .sign(secret);

  const route = `${API_BASE_URL}/v2/media/input`;

  const response = await fetch(route, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`,
    },
    body: JSON.stringify({
      mediaUrl,
    }),
  });

  const result = await response.json();
  const item = MediaItem.parse(result);
  res.status(200).json({item});
}
