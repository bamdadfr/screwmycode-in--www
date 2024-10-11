import React from 'react';

import {FormComponent} from '../components/form/form.component';
import {DefaultLayout} from '../layouts/default/default.layout';

export default function IndexPage() {
  return (
    <DefaultLayout>
      <FormComponent />
    </DefaultLayout>
  );
}
