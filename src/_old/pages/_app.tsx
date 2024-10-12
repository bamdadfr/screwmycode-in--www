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
      {/* eslint-disable-next-line react/jsx-props-no-spreading */}
      <DefaultSeo {...SEO} />
      <NextSeo
        noindex={false}
        nofollow={false}
      />
      <AppLayout>
        {/* eslint-disable-next-line react/jsx-props-no-spreading */}
        <Component {...pageProps} />
      </AppLayout>
    </>
  );
}
