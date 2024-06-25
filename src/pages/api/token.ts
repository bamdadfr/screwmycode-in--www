import {NextApiRequest, NextApiResponse} from 'next';
import {verifyRecaptchaToken} from '../../utils/verify-recaptcha-token';

export default async function Handler(
  req: NextApiRequest,
  res: NextApiResponse,
): Promise<void> {
  const secret = process.env.RECAPTCHA_SECRET;
  const token = req.body as string;
  const isValid = await verifyRecaptchaToken(token, secret);
  res.status(200).json({
    isValid,
  });
}
