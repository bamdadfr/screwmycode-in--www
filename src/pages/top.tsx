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

interface TopPageProps {
  top: TableComponentItem[];
}

/**
 * Top page
 * Path: /top
 */
export default function TopPage({top}: TopPageProps): ReactElement {
  return (
    <>
      <MetaComponent description="Top" />
      <DefaultLayout customMeta>
        <TableComponent table={top} />
      </DefaultLayout>
    </>
  );
}

export async function getServerSideProps(): Promise<GetServerSidePropsResult<unknown>> {
  try {
    const data = await apiQuery('/top');

    const props: TopPageProps = {
      top: data,
    };

    return {props};
  } catch {
    return invokeRedirection();
  }
}
