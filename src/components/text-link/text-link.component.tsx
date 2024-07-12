import React, {ReactElement} from 'react';

import {TextLink} from './text-link.component.styles';

interface TextLinkComponentProps {
  href: string;
  target: string;
  children: ReactElement | string;
}

export function TextLinkComponent({
  href,
  target,
  children,
}: TextLinkComponentProps): ReactElement {
  return (
    <TextLink
      href={href}
      target={target}
      rel={target === '_blank' ? 'noopener noreferrer' : undefined}
    >
      {children}
    </TextLink>
  );
}
