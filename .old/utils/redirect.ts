import {type GetStaticPropsResult, type Redirect as NextRedirect} from 'next';
import {Revalidate} from 'src/_old/utils/revalidate';

interface R {
  redirect: NextRedirect;
}

// eslint-disable-next-line @typescript-eslint/no-extraneous-class
export class Redirect {
  public static get home(): R {
    return {
      redirect: {
        destination: '/',
        permanent: false,
      },
    };
  }

  public static get last(): R {
    return {
      redirect: {
        destination: '/last',
        permanent: true,
      },
    };
  }

  public static notFound<T>(): GetStaticPropsResult<T> {
    return {
      notFound: true,
      ...Revalidate.minute,
    };
  }
}
