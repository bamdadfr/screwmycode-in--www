import {NextApiRequest, NextApiResponse} from 'next';
import {verifyRecaptchaToken} from 'src/_old/utils/verify-recaptcha-token';

export default async function Handler(
  req: NextApiRequest,
  res: NextApiResponse,
): Promise<void> {
  if (process.env.NODE_ENV !== 'production') {
    return res.status(200).json({isValid: true});
  }

  const secret = process.env.RECAPTCHA_SECRET as string;
  const token = req.body as string;
  const isValid = await verifyRecaptchaToken(token, secret);
  res.status(200).json({
    isValid,
  });
}
