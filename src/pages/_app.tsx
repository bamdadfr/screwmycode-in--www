import 'sass-reset';

import {AppProps} from 'next/app';
import {DefaultSeo} from 'next-seo';
import React from 'react';
import {ThemeWrapper} from 'src/app/components/theme-wrapper/theme-wrapper';
import {HeaderComponent} from 'src/components/header/header.component';
import {SEO} from 'src/seo';

import {useApp} from '../app/hooks/use-app/use-app';

export default function MyApp({Component, pageProps}: AppProps) {
  useApp();

  return (
    <>
      {/* eslint-disable-next-line react/jsx-props-no-spreading */}
      <DefaultSeo {...SEO} />
      <ThemeWrapper>
        <>
          <HeaderComponent />
          {/* eslint-disable-next-line react/jsx-props-no-spreading */}
          <Component {...pageProps} />
        </>
      </ThemeWrapper>
    </>
  );
}
