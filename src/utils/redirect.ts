import {type GetStaticPropsResult, type Redirect as NextRedirect} from 'next';
import {Revalidate} from 'src/utils/revalidate';

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
