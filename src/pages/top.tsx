import React, {ReactElement} from 'react';
import {GetStaticPropsResult} from 'next';
import {DefaultLayout} from '../layouts/default/default.layout';
import {
  TableComponent,
  TableComponentItem,
} from '../components/table/table.component';
import {apiQuery} from '../utils/api-query/api-query';
import {MetaComponent} from '../components/meta/meta.component';
import {REVALIDATE} from '../constants';

interface TopPageProps {
  top: TableComponentItem[];
}

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

type GetStaticProps = GetStaticPropsResult<TopPageProps>;

export async function getStaticProps(): Promise<GetStaticProps> {
  const top = await apiQuery<TopPageProps['top']>('top');

  return {
    props: {
      top,
    },
    revalidate: REVALIDATE,
  };
}
