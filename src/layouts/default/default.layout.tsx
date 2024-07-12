import React, {ReactElement} from 'react';
import {MetaComponent} from 'src/components/meta/meta.component';

import {Wrapper} from './default.layout.styles';

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
      <Wrapper>{children}</Wrapper>
    </>
  );
}
