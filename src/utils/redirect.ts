import {type Redirect as NextRedirect} from 'next';

interface R {
  redirect: NextRedirect;
}

export class Redirect {
  public static get home(): R {
    return {
      redirect: {
        destination: '/',
        permanent: false,
      },
    };
  }
}
