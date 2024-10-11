import {type GetStaticProps} from 'next';
import {NextSeo} from 'next-seo';
import React from 'react';
import {type TopDto} from 'src/utils/dtos';
import {ServerQuery} from 'src/utils/query';
import {Redirect} from 'src/utils/redirect';

import {TableComponent} from '../components/table/table.component';
import {REVALIDATE} from '../constants';
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

  if (err) {
    return Redirect.home;
  }

  return {
    props: {
      top: data,
    },
    revalidate: REVALIDATE,
  };
};
