import 'sass-reset';
import 'styles/global.scss';

import {AppProps} from 'next/app';
import {DefaultSeo, NextSeo} from 'next-seo';
import React from 'react';
import {AppLayout} from 'src/_old/layouts/AppLayout';
import {SEO} from 'src/_old/seo';

export default function MyApp({Component, pageProps}: AppProps) {
  return (
    <>
      <DefaultSeo {...SEO} />
      <NextSeo
        noindex={false}
        nofollow={false}
      />
      <AppLayout>
        <Component {...pageProps} />
      </AppLayout>
    </>
  );
}
