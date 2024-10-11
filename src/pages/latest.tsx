import {type GetStaticProps} from 'next';
import {NextSeo} from 'next-seo';
import React from 'react';
import {type LatestDto} from 'src/utils/dtos';
import {ServerQuery} from 'src/utils/query';
import {Redirect} from 'src/utils/redirect';

import {TableComponent} from '../components/table/table.component';
import {REVALIDATE} from '../constants';
import {DefaultLayout} from '../layouts/default/default.layout';

interface Props {
  latest: LatestDto[];
}

export default function LatestPage({latest}: Props) {
  return (
    <>
      <NextSeo title="Latest" />

      <DefaultLayout>
        <TableComponent items={latest} />
      </DefaultLayout>
    </>
  );
}

export const getStaticProps: GetStaticProps<Props> = async () => {
  const {data, err} = await ServerQuery.latest();

  if (err) {
    return Redirect.home;
  }

  return {
    props: {
      latest: data,
    },
    revalidate: REVALIDATE,
  };
};
