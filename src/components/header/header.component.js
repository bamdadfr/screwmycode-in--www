/* eslint-disable jsx-a11y/anchor-is-valid */
// noinspection HtmlUnknownTarget

import React from 'react';
import Link from 'next/link';
import home from '@iconify/icons-mdi/home';
import history from '@iconify/icons-mdi/history';
import podium from '@iconify/icons-mdi/podium';
import information from '@iconify/icons-mdi/information-variant';
import {Icon} from '@iconify/react';
import {
  LeftContainer,
  PodiumIcon,
  RightContainer,
} from './header.component.styles';

/**
 * Component for the header of the application
 *
 * @returns {React.ReactElement} - Rendered component
 */
export function HeaderComponent() {
  return (
    <>
      <LeftContainer>
        <Link href="/">
          <a><Icon icon={home} /></a>
        </Link>

        <Link href="/latest">
          <a><Icon icon={history} /></a>
        </Link>

        <Link href="/top">
          <a><PodiumIcon icon={podium} /></a>
        </Link>
      </LeftContainer>

      <RightContainer>
        <Link href="/about">
          <a><Icon icon={information} /></a>
        </Link>
      </RightContainer>
    </>
  );
}
