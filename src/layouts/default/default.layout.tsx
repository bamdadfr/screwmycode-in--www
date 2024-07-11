import React, {ReactElement} from 'react';
import {HeaderComponent} from 'src/components/header/header.component';
import {MetaComponent} from 'src/components/meta/meta.component';

import {DefaultLayoutContainer} from './default.layout.styles';

interface DefaultLayoutProps {
  children: ReactElement | ReactElement[];
  customMeta?: boolean;
}

/**
 * Layout for the default page
 */
export function DefaultLayout({
  children,
  customMeta = false,
}: DefaultLayoutProps): ReactElement {
  return (
    <>
      {!customMeta && <MetaComponent />}
      {/* <Container> */}
      {/*  <Wrapper>{children}</Wrapper> */}
      {/* </Container> */}
      <DefaultLayoutContainer>
        <HeaderComponent />
        {children}
      </DefaultLayoutContainer>
    </>
  );
}
