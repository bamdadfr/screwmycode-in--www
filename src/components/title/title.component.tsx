import React, {ReactElement} from 'react';
import Link from 'next/link';
import {Title} from './title.component.styles';

/**
 * Component for the title of the page
 */
export function TitleComponent(): ReactElement {
  return (
    <Title>
      <Link href="/">
        {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
        <a>
          screwmycode.in
        </a>
      </Link>
    </Title>
  );
}
