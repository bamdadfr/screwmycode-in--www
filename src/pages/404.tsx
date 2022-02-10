import React, {ReactElement} from 'react';
import {DefaultLayout} from '../layouts/default/default.layout';
import {useRedirectAuto} from '../hooks/use-redirect-auto';
import {MetaComponent} from '../components/meta/meta.component';

/**
 * 404 page
 * Path: /404 and any other path that doesn't match any other route
 */
export default function NotFoundPage(): ReactElement {
  useRedirectAuto();

  return (
    <>
      <MetaComponent description="Page not found" />
      <DefaultLayout customMeta>
        <h2>
          Page not found, redirecting to home...
        </h2>
      </DefaultLayout>
    </>
  );
}
