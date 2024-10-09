import {NextSeo} from 'next-seo';
import React, {type ReactElement} from 'react';

import {Wrapper} from './default.layout.styles';

interface Props {
  children: ReactElement | ReactElement[];
}

export function DefaultLayout({children}: Props): ReactElement {
  return (
    <>
      <NextSeo
        noindex={false}
        nofollow={false}
      />
      <Wrapper>{children}</Wrapper>
    </>
  );
}
