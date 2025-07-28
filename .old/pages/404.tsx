import {NextSeo} from 'next-seo';
import React from 'react';
import {useRedirectAuto} from 'src/_old/hooks/use-redirect-auto';
import {DefaultLayout} from 'src/components/_tomove/default-layout';

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
