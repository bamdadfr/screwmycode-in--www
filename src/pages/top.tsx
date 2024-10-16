import {type GetStaticProps} from 'next';
import {NextSeo} from 'next-seo';
import React from 'react';
import {type TopDto} from 'src/utils/dtos';
import {ServerQuery} from 'src/utils/query';
import {Redirect} from 'src/utils/redirect';
import {Revalidate} from 'src/utils/revalidate';

import {TableComponent} from '../components/table/table.component';
import {DefaultLayout} from '../layouts/default/default.layout';

interface Props {
  top: TopDto[];
}

export default function TopPage({top}: Props) {
  return (
    <>
      <NextSeo title="Top" />

      <DefaultLayout>
        <TableComponent items={top} />
      </DefaultLayout>
    </>
  );
}

export const getStaticProps: GetStaticProps<Props> = async () => {
  const {data, err} = await ServerQuery.top();

  if (!data || err) {
    return Redirect.notFound<Props>();
  }

  return {
    props: {
      top: data,
    },
    ...Revalidate.minute,
  };
};
