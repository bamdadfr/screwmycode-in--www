import history from '@iconify/icons-mdi/history';
import home from '@iconify/icons-mdi/home';
import information from '@iconify/icons-mdi/information-variant';
import podium from '@iconify/icons-mdi/podium';
import {Icon} from '@iconify/react';
import React, {ReactElement} from 'react';
import {LinkComponent} from 'src/components/link.component';
import {TitleComponent} from 'src/components/title/title.component';

import {Container, Left, Podium, Right} from './header.component.styles';

/**
 * Component for the header of the application
 */
export function HeaderComponent(): ReactElement {
  return (
    <Container>
      <Left>
        <LinkComponent
          href="/"
          ariaLabel="home"
        >
          <Icon icon={home} />
        </LinkComponent>

        <LinkComponent
          href="/latest"
          ariaLabel="latest"
        >
          <Icon icon={history} />
        </LinkComponent>

        <LinkComponent
          href="/top"
          ariaLabel="top"
        >
          <Podium icon={podium} />
        </LinkComponent>
      </Left>

      <TitleComponent />

      <Right>
        <LinkComponent
          href="/about"
          ariaLabel="about"
        >
          <Icon icon={information} />
        </LinkComponent>
      </Right>
    </Container>
  );
}
