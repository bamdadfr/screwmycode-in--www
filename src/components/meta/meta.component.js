import React from 'react';
import PropTypes from 'prop-types';
import Head from 'next/head';

const propTypes = {
  title: PropTypes.string,
  url: PropTypes.string,
  description: PropTypes.string,
  image: PropTypes.string,
};

export const defaultProps = {
  title: 'ScrewMyCode.in',
  url: 'https://www.screwmycode.in/',
  description: 'Variable speed pitch control for YouTube',
  image: 'https://upload.wikimedia.org/wikipedia/en/7/7d/DJ_Screw.jpeg',
};

/**
 * Component for rendering meta tags
 *
 * @param {object} props - Component props
 * @param {string} [props.title] - TitleWrapper of the page
 * @param {string} [props.url] - URL of the page
 * @param {string} [props.description] - Description of the page
 * @param {string} [props.image] - Image of the page
 * @returns {React.ReactElement} - Rendered component
 */
export function MetaComponent({
  title = defaultProps.title,
  url = defaultProps.url,
  description = defaultProps.description,
  image = defaultProps.image,
}) {
  // noinspection HtmlUnknownTarget, HtmlRequiredTitleElement
  return (
    <Head>

      <meta charSet="UTF-8" />
      <meta
        property="viewport"
        content="width=device-width, initial-scale=1.0"
      />

      <title>{`${description} - ${title}`}</title>

      <meta itemProp="name" content={title} />
      <meta itemProp="description" content={description} />
      <meta name="description" content={description} />
      <meta itemProp="image" content={image} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />

      <meta property="og:site_name" content={title} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />

      {/* from https://realfavicongenerator.net/ */}
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/favicon/apple-touch-icon.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/favicon/favicon-32x32.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/favicon/favicon-16x16.png"
      />
      <link rel="manifest" href="/favicon/site.webmanifest" />
      <meta name="msapplication-TileColor" content="#da532c" />
      <meta name="theme-color" content="#ffffff" />

    </Head>
  );
}

MetaComponent.propTypes = propTypes;
MetaComponent.defaultProps = defaultProps;
