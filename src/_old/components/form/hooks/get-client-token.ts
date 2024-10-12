import {RECAPTCHA_SITE_KEY} from 'src/_old/app/hooks/use-google-analytics/use-google-analytics.constants';

export async function getClientToken(): Promise<string> {
  return new Promise((resolve) => {
    // @ts-expect-error google recaptcha injection
    window.grecaptcha.ready(() => {
      // @ts-expect-error google recaptcha injection
      window.grecaptcha
        .execute(RECAPTCHA_SITE_KEY, {action: 'submit'})
        .then((token) => {
          resolve(token);
        });
    });
  });
}
