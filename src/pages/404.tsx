import {NextSeo} from 'next-seo';
import React, {type ReactElement} from 'react';

import {useRedirectAuto} from '../hooks/use-redirect-auto';
import {DefaultLayout} from '../layouts/default/default.layout';

export default function NotFoundPage(): ReactElement {
  useRedirectAuto();

  return (
    <>
      <NextSeo title="Page not found" />

      <DefaultLayout>
        <h2>Page not found, redirecting to home...</h2>
      </DefaultLayout>
    </>
  );
}
