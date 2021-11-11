/* eslint-disable react/forbid-prop-types */
import React from 'react';
import PropTypes from 'prop-types';
import 'sass-reset';
import { useApp } from '../app/hooks/use-app/use-app';
import { WithStyledComponents } from '../app/components/with-styled-components/with-styled-components';

const propTypes = {
  Component: PropTypes.func.isRequired,
  pageProps: PropTypes.object.isRequired,
  err: PropTypes.any,
};

const defaultProps = {
  err: undefined,
};

/**
 * Component to wrap the application
 *
 * @param {object} props - Component props
 * @param {Function} props.Component - The component to wrap
 * @param {object} props.pageProps - The page props
 * @param {*} props.err - The error
 * @returns {React.ReactElement} - Rendered component
 */
export default function MyApp ({ Component, pageProps, err }) {
  useApp ();

  return (
    <>
      <WithStyledComponents>
        {/* eslint-disable-next-line react/jsx-props-no-spreading */}
        <Component {...pageProps} err={err} />
      </WithStyledComponents>
    </>
  );
}

MyApp.propTypes = propTypes;
MyApp.defaultProps = defaultProps;
