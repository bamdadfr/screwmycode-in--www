import React from 'react';
import Link from 'next/link';
import { Title } from './title.component.styles';

/**
 * Component for the title of the page
 *
 * @returns {React.ReactElement} - Rendered component
 */
export function TitleComponent () {
  return (
    <>
      <Title>
        <Link href="/">
          {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
          <a>
            screwmycode.in
          </a>
        </Link>
      </Title>
    </>
  );
}
