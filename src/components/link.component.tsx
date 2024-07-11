import React, {ReactElement} from 'react';
import Link from 'next/link';
import styled from 'styled-components';

interface Props {
  href: string;
  children: ReactElement | string;
  ariaLabel?: string;
}

const MyAnchor = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export function LinkComponent({href, children, ariaLabel}: Props) {
  return (
    <Link
      legacyBehavior
      href={href}
    >
      {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
      <MyAnchor aria-label={ariaLabel ?? ''}>{children}</MyAnchor>
    </Link>
  );
}
