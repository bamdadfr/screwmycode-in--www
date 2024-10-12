/* eslint-disable react/no-danger */
import Document, {Head, Html, Main, NextScript} from 'next/document';
import React from 'react';
import {
  GA_TRACKING_ID,
  RECAPTCHA_SITE_KEY,
} from 'src/_old/app/hooks/use-google-analytics/use-google-analytics.constants';

export default class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          {/* Google Analytics */}
          <script
            async
            src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`}
          />
          {/* reCAPTCHA */}
          <script
            src={`https://www.google.com/recaptcha/api.js?render=${RECAPTCHA_SITE_KEY}`}
            async
            defer
          />
          <script
            dangerouslySetInnerHTML={{
              __html: `function gtag(){dataLayer.push(arguments)}window.dataLayer=window.dataLayer||[],gtag("js",new Date),gtag("config","${GA_TRACKING_ID}",{page_path:window.location.pathname});`,
            }}
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
