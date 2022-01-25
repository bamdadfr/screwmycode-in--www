import React from 'react';
import {DefaultLayout} from '../layouts/default/default.layout';
import {FormComponent} from '../components/form/form.component';

/**
 * Index page
 * Path: /
 *
 * @returns {React.ReactElement} - Index page component
 */
export default function IndexPage() {
  return (
    <>
      <DefaultLayout>
        <FormComponent />
      </DefaultLayout>
    </>
  );
}
