import {GetStaticPropsResult} from 'next';
import {NextSeo} from 'next-seo';
import React, {type ReactElement} from 'react';

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
      <NextSeo title="Top" />

      <DefaultLayout>
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
