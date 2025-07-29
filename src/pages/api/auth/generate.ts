import {SignJWT} from 'jose';
import {NextApiRequest, NextApiResponse} from 'next';

interface ResponseData {
  token: string;
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseData>,
) {
  const secret = new TextEncoder().encode(process.env.JWT_SECRET);

  const token = await new SignJWT({
    iat: Math.floor(Date.now() / 1000),
    exp: Math.floor(Date.now() / 1000) + 24 * 60 * 60, // 24h
  })
    .setProtectedHeader({alg: 'HS256'})
    .sign(secret);

  res.status(200).json({token});
}
