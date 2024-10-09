import {NextSeo} from 'next-seo';
import React from 'react';

import {useRedirectAuto} from '../hooks/use-redirect-auto';
import {DefaultLayout} from '../layouts/default/default.layout';

export default function NotFoundPage() {
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
