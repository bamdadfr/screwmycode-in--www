import React from 'react';
import PropTypes from 'prop-types';
import {TextLink} from './text-link.component.styles';

const propTypes = {
  href: PropTypes.string.isRequired,
  target: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  bold: PropTypes.bool,
  underline: PropTypes.bool,
  underlineOnHover: PropTypes.bool,
};

const defaultProps = {
  bold: false,
  underline: false,
  underlineOnHover: false,
};

/**
 * @param {object} props - React props
 * @param {string} props.href - The link to navigate to
 * @param {string} props.target - The target of the link
 * @param {*} props.children - The content of the link
 * @param {boolean} props.bold - Whether the link should be bold
 * @param {boolean} props.underline - Whether the link should be underlined
 * @param {boolean} props.underlineOnHover - Whether the link should be underlined on hover
 * @returns {React.ReactElement} - The component
 */
export function TextLinkComponent({
  href,
  target,
  children,
  bold = defaultProps.bold,
  underline = defaultProps.underline,
  underlineOnHover = defaultProps.underlineOnHover,
}) {
  return (
    <>
      <TextLink
        href={href}
        target={target}
        rel={target === '_blank' ? 'noopener noreferrer' : null}
        bold={bold}
        underline={underline}
        underlineOnHover={underlineOnHover}
      >
        {children}
      </TextLink>
    </>
  );
}

TextLinkComponent.propTypes = propTypes;
TextLinkComponent.defaultProps = defaultProps;
