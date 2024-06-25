import {RECAPTCHA_SITE_KEY} from '../../../app/hooks/use-google-analytics/use-google-analytics.constants';

export async function getClientToken(): Promise<string> {
  return new Promise((resolve) => {
    window.grecaptcha.ready(() => {
      window.grecaptcha
        .execute(RECAPTCHA_SITE_KEY, {action: 'submit'})
        .then((token) => {
          resolve(token);
        });
    });
  });
}
