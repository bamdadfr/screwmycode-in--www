import 'sass-reset';
import 'styles/global.scss';

import {Provider as Jotai} from 'jotai';
import {type Metadata} from 'next';
import React, {type CSSProperties} from 'react';
import {SEO} from 'src/_old/seo';
import {AppAudio} from 'src/components/app/AppAudio';
import {AppFooter} from 'src/components/app/AppFooter';
import {AppHeader} from 'src/components/app/AppHeader';
import {AppMain} from 'src/components/app/AppMain';
import {AppNav} from 'src/components/app/AppNav';

import styles from './layout.module.scss';
import {ReactQuery} from './providers';

export const metadata: Metadata = {
  title: SEO.defaultTitle,
  description: SEO.description,
  authors: [{name: 'Bamdad Sabbagh', url: 'https://www.bamdad.fr'}],
  manifest: '/favicon/site.webmanifest',
  icons: {
    apple: '/favicon/apple-touch-icon.png',
    icon: '/favicon/favicon-32x32.png',
  },
  openGraph: {
    title: SEO.defaultTitle,
    siteName: SEO.defaultTitle,
    url: SEO.canonical,
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: 'https://upload.wikimedia.org/wikipedia/en/7/7d/DJ_Screw.jpeg',
        width: 300,
        height: 300,
      },
    ],
  },
};

const theme = {
  primary: '#a7abb0',
  highlight: '#63BCF8',
  buffered: '#1c262c',
  backgroundPrimary: '#242930',
  backgroundHighlight: '#2F353E',
  black: '#1F2329',
  gray: '#76797C',
  darkGray: '#5f6064',
  borderPrimary: '#343434',
  shadowOpacity: 'rgba(0, 0, 0, 0.25)',
  shadowOpacityLight: 'rgba(0, 0, 0, 0.12)',
};

const obj: CSSProperties = {};
for (const key in theme) {
  obj[`--c-${key}`] = theme[key];
}

const RootLayout = ({children}) => {
  return (
    <html
      lang="en"
      style={obj}
    >
      <body>
        <ReactQuery>
          <Jotai>
            <AppAudio />

            <div className={styles.app}>
              <AppHeader />
              <AppNav />
              <AppMain>{children}</AppMain>
              <AppFooter />
            </div>
          </Jotai>
        </ReactQuery>
      </body>
    </html>
  );
};

export default RootLayout;
