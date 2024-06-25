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

interface LatestPageProps {
  latest: TableComponentItem[];
}

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

export async function getStaticProps(): Promise<
  GetStaticPropsResult<LatestPageProps>
> {
  const latest = await apiQuery<LatestPageProps['latest']>('latest');

  return {
    props: {
      latest,
    },
    revalidate: REVALIDATE,
  };
}
