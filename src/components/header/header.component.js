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
  PodiumButton,
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
          <button
            type="button"
            aria-label="home"
          >
            <Icon icon={home} />
          </button>
        </Link>
        <Link href="/latest">
          <button
            type="button"
            aria-label="latest"
          >
            <Icon icon={history} />
          </button>
        </Link>
        <Link href="/top">
          <PodiumButton
            type="button"
            aria-label="latest"
          >
            <Icon icon={podium} />
          </PodiumButton>
        </Link>
      </LeftContainer>
      <RightContainer>
        <Link href="/about">
          <button
            type="button"
            aria-label="latest"
          >
            <Icon icon={information} />
          </button>
        </Link>
      </RightContainer>
    </>
  );
}
