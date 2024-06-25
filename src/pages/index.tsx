import React, {ReactElement} from 'react';
import {DefaultLayout} from '../layouts/default/default.layout';
import {FormComponent} from '../components/form/form.component';

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
