import {GetStaticPropsResult} from 'next';
import React, {ReactElement} from 'react';

import {MetaComponent} from '../components/meta/meta.component';
import {
  TableComponent,
  TableComponentItem,
} from '../components/table/table.component';
import {REVALIDATE} from '../constants';
import {DefaultLayout} from '../layouts/default/default.layout';
import {apiQuery} from '../utils/api-query/api-query';

interface TopPageProps {
  top: TableComponentItem[];
}

export default function TopPage({top}: TopPageProps): ReactElement {
  return (
    <>
      <MetaComponent description="Top" />
      <DefaultLayout customMeta>
        <TableComponent items={top} />
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
