import {SignJWT} from 'jose';
import {NextApiRequest, NextApiResponse} from 'next';
import {API_BASE_URL} from 'src/constants';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  if (req.method !== 'POST') {
    return res.status(405).json({error: 'Method not allowed'});
  }

  const {audioUrl, mediaType} = req.body;
  const authToken = req.headers.authorization?.replace('Bearer ', '');

  if (!authToken) {
    return res.status(401).json({error: 'No authentication token'});
  }

  if (!audioUrl || !mediaType) {
    return res.status(400).json({error: 'Missing audioUrl or mediaType'});
  }

  try {
    // Verify the main JWT token first (optional but recommended)
    const secret = new TextEncoder().encode(process.env.JWT_SECRET);
    // Get media URL from Django using the main auth token
    const djangoResponse = await fetch(`${API_BASE_URL}/v2/media/get`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${authToken}`,
      },
      body: JSON.stringify({
        url: audioUrl,
        type: mediaType,
      }),
    });

    if (!djangoResponse.ok) {
      const error = await djangoResponse.text();
      return res.status(djangoResponse.status).json({error});
    }

    const {media_url, item} = await djangoResponse.json();

    // Create temporary JWT token using jose (same as your auth tokens)
    const tempToken = await new SignJWT({
      media_url,
      mediaType,
      iat: Math.floor(Date.now() / 1000),
      exp: Math.floor(Date.now() / 1000) + 60 * 60 * 24, // 24 hours
    })
      .setProtectedHeader({alg: 'HS256'})
      .sign(secret);

    console.log(
      'JWT Secret (first 10):',
      process.env.JWT_SECRET?.substring(0, 10),
    );
    console.log('JWT Secret (last 10):', process.env.JWT_SECRET?.slice(-10));
    console.log('Created token:', tempToken);

    res.json({
      expires_in: 600, // 10 minutes in seconds
      media_url: `${API_BASE_URL}/v2/media/${tempToken}`,
      item,
    });
  } catch (error) {
    console.error('Token creation error:', error);
    res.status(500).json({error: 'Internal server error'});
  }
}
