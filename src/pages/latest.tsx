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

interface LatestPageProps {
  latest: TableComponentItem[];
}

export default function LatestPage({latest}: LatestPageProps): ReactElement {
  return (
    <>
      <MetaComponent description="Latest" />
      <DefaultLayout customMeta>
        <TableComponent items={latest} />
      </DefaultLayout>
    </>
  );
}

type GetStaticProps = GetStaticPropsResult<LatestPageProps>;

export async function getStaticProps(): Promise<GetStaticProps> {
  const latest = await apiQuery<LatestPageProps['latest']>('latest');

  return {
    props: {
      latest,
    },
    revalidate: REVALIDATE,
  };
}
