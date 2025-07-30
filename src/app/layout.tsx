import 'sass-reset';
import 'styles/global.scss';

import {Provider as Jotai} from 'jotai';
import {type Metadata} from 'next';
import React, {type CSSProperties, JSX} from 'react';
import {AppAudio} from 'src/components/app/app-audio';
import {AppFooter} from 'src/components/app/app-footer';
import {AppHeader} from 'src/components/app/app-header';
import {AppMain} from 'src/components/app/app-main';
import {AppNav} from 'src/components/app/app-nav';
import {AppToken} from 'src/components/app/app-token';
import {SEO} from 'src/seo';
import {generateToken} from 'src/utils';

import styles from './layout.module.scss';
import {ReactQuery} from './providers';

// eslint-disable-next-line react-refresh/only-export-components
export const metadata: Metadata = {
  title: SEO.defaultTitle,
  description: SEO.description,
  authors: [{name: 'Bamdad Sabbagh', url: 'https://www.bamdad.fr/'}],
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
  'primary': '#a7abb0',
  'highlight': '#63BCF8',
  'buffered': '#1c262c',
  'background-primary': '#242930',
  'background-highlight': '#2F353E',
  'black': '#1F2329',
  'gray': '#76797C',
  'dark-gray': '#5f6064',
  'border-primary': '#343434',
  'shadow-opacity': 'rgba(0, 0, 0, 0.25)',
  'shadow-opacity-light': 'rgba(0, 0, 0, 0.12)',
};

const obj: CSSProperties = {};
for (const key in theme) {
  obj[`--theme-${key}`] = theme[key];
}

interface Props {
  children: JSX.Element;
}

export default async function RootLayout({children}: Props) {
  const token = await generateToken();

  return (
    <html
      lang="en"
      style={obj}
    >
      <body>
        <ReactQuery>
          <Jotai>
            <AppToken token={token} />
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
}
