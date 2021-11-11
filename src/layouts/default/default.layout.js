import React from 'react';
import PropTypes from 'prop-types';
import { HeaderComponent } from '../../components/header/header.component';
import { MetaComponent } from '../../components/meta/meta.component';
import { TitleComponent } from '../../components/title/title.component';
import { Wrapper, Container } from './default.layout.styles';

const propTypes = {
  children: PropTypes.oneOfType ([
    PropTypes.element,
    PropTypes.array,
  ]).isRequired,
  customMeta: PropTypes.bool,
};

const defaultProps = {
  customMeta: false,
};

/**
 * Layout for the default page
 *
 * @param {object} props - Component props
 * @param {React.ReactElement} props.children - The children elements
 * @param {boolean} [props.customMeta] - Whether to use the custom meta component
 * @returns {React.ReactElement} - Rendered component
 */
export function DefaultLayout ({
  children,
  customMeta,
}) {
  return (
    <>
      {!customMeta && <MetaComponent />}
      <HeaderComponent />
      <Container>
        <TitleComponent />
        <Wrapper>
          {children}
        </Wrapper>
      </Container>
    </>
  );
}

DefaultLayout.propTypes = propTypes;
DefaultLayout.defaultProps = defaultProps;
