import React, {type ReactElement} from 'react';

import {FormComponent} from '../components/form/form.component';
import {DefaultLayout} from '../layouts/default/default.layout';

/**
 * Index page
 * Path: /
 */
export default function IndexPage(): ReactElement {
  return (
    <DefaultLayout>
      <FormComponent />
    </DefaultLayout>
  );
}
