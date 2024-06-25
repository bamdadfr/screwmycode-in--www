import React, {ReactElement} from 'react';
import {HeaderComponent} from '../../components/header/header.component';
import {MetaComponent} from '../../components/meta/meta.component';
import {TitleComponent} from '../../components/title/title.component';
import {Container, Wrapper} from './default.layout.styles';

interface DefaultLayoutProps {
  children: ReactElement | ReactElement[];
  customMeta?: boolean;
}

/**
 * Layout for the default page
 * @param root0
 * @param root0.children
 * @param root0.customMeta
 */
export function DefaultLayout({
  children,
  customMeta = false,
}: DefaultLayoutProps): ReactElement {
  return (
    <>
      {!customMeta && <MetaComponent />}
      <HeaderComponent />
      <Container>
        <TitleComponent />
        <Wrapper>
          {children}
        </Wrapper>
      </Container>
    </>
  );
}
