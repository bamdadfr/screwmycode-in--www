import {SignJWT} from 'jose';
import {NextApiRequest, NextApiResponse} from 'next';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  const secret = new TextEncoder().encode(process.env.JWT_SECRET);
  const {mediaUrl, mediaType} = req.body;

  const token = await new SignJWT({
    mediaUrl,
    mediaType,
    exp: Math.floor(Date.now() / 1000) + 24 * 60 * 60, // 24h
  })
    .setProtectedHeader({alg: 'HS256'})
    .sign(secret);

  res.status(200).json({token});
}
