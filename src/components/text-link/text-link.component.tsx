import React, {ReactElement} from 'react';
import {TextLink} from './text-link.component.styles';

interface TextLinkComponentProps {
  href: string;
  target: string;
  children: ReactElement | string;
}

export interface AnchorOptions {
  bold?: boolean;
  underline?: boolean;
  underlineOnHover?: boolean;
}

export function TextLinkComponent({
  href,
  target,
  children,
  bold = false,
  underline = false,
  underlineOnHover = false,
}: TextLinkComponentProps & AnchorOptions): ReactElement {
  return (
    <TextLink
      href={href}
      target={target}
      rel={target === '_blank' ? 'noopener noreferrer' : undefined}
      bold={bold}
      underline={underline}
      underlineOnHover={underlineOnHover}
    >
      {children}
    </TextLink>
  );
}
