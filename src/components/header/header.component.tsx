import history from '@iconify/icons-mdi/history';
import home from '@iconify/icons-mdi/home';
import information from '@iconify/icons-mdi/information-variant';
import podium from '@iconify/icons-mdi/podium';
import {Icon} from '@iconify/react';
import Link from 'next/link';
import React, {type ReactElement} from 'react';

import {
  Container,
  IconContainer,
  Left,
  Podium,
  Right,
  TitleContainer,
} from './header.component.styles';

export function HeaderComponent(): ReactElement {
  return (
    <Container>
      <Left>
        <Link href="/">
          <IconContainer>
            <Icon icon={home} />
          </IconContainer>
        </Link>

        <Link href="/latest">
          <IconContainer>
            <Icon icon={history} />
          </IconContainer>
        </Link>

        <Link href="/top">
          <IconContainer>
            <Podium icon={podium} />
          </IconContainer>
        </Link>
      </Left>

      <TitleContainer>
        <Link href="/">screwmycode.in</Link>
      </TitleContainer>

      <Right>
        <Link href="/about">
          <IconContainer>
            <Icon icon={information} />
          </IconContainer>
        </Link>
      </Right>
    </Container>
  );
}
