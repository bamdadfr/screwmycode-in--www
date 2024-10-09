import {type DefaultSeoProps} from 'next-seo';

const title = 'ScrewMyCode.in';
const description =
  'Variable speed pitch control for YouTube, Soundcloud & Bandcamp';
const url = 'https://www.screwmycode.in/';

export const SEO: DefaultSeoProps = {
  defaultTitle: title,
  description,
  titleTemplate: `%s - ${title}`,
  canonical: url,
  norobots: false,
  openGraph: {
    title,
    description,
    siteName: title,
    type: 'website',
    locale: 'en_US',
    url,
    images: [
      {
        url: 'https://upload.wikimedia.org/wikipedia/en/7/7d/DJ_Screw.jpeg',
        width: 300,
        height: 300,
      },
    ],
  },
  twitter: {
    cardType: 'summary_large_image',
  },
  additionalLinkTags: [
    {
      rel: 'manifest',
      href: '/favicon/site.webmanifest',
    },
    {
      rel: 'apple-touch-icon',
      sizes: '180x180',
      href: 'favicon/apple-touch-icon.png',
    },
    {
      rel: 'icon',
      type: 'image/png',
      sizes: '32x32',
      href: '/favicon/favicon-32x32.png',
    },
    {
      rel: 'icon',
      type: 'image/png',
      sizes: '16x16',
      href: '/favicon/favicon-16x16.png',
    },
    {
      rel: 'mask-icon',
      href: '/favicon/safari-pinned-tab.svg',
      color: '#ffffff',
    },
  ],
  additionalMetaTags: [
    {
      name: 'msapplication-TileColor',
      content: '#ffffff',
    },
    {
      name: 'theme-color',
      content: '#ffffff',
    },
  ],
};
