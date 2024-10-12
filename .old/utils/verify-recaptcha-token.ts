export async function verifyRecaptchaToken(
  token: string,
  secret: string,
): Promise<boolean> {
  try {
    const request = await fetch(
      'https://www.google.com/recaptcha/api/siteverify',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: encodeURI(`secret=${secret}&response=${token}`),
      },
    );

    const response = await request.json();
    return response.success && response.score > 0.5;
  } catch {
    return false;
  }
}
