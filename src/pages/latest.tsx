import React, {ReactElement} from 'react';
import {GetServerSidePropsResult} from 'next';
import {DefaultLayout} from '../layouts/default/default.layout';
import {
  TableComponent,
  TableComponentItem,
} from '../components/table/table.component';
import {apiQuery} from '../utils/api-query/api-query';
import {
  invokeRedirection,
} from '../utils/invoke-redirection/invoke-redirection';
import {MetaComponent} from '../components/meta/meta.component';

interface LatestPageProps {
  latest: TableComponentItem[];
}

/**
 * Latest page
 * Path: /latest
 */
export default function LatestPage({latest}: LatestPageProps): ReactElement {
  return (
    <>
      <MetaComponent description="Latest" />
      <DefaultLayout customMeta>
        <TableComponent table={latest} />
      </DefaultLayout>
    </>
  );
}

export async function getServerSideProps(): Promise<GetServerSidePropsResult<unknown>> {
  try {
    const data = await apiQuery('/latest');

    const props: LatestPageProps = {
      latest: data,
    };

    return {props};
  } catch {
    return invokeRedirection();
  }
}
