import {Redirect} from 'next';

export function invokeRedirection(): {redirect: Redirect;} {
  return {
    redirect: {
      destination: '/',
      permanent: false,
    },
  };
}
