import {type GetStaticProps} from 'next';
import {NextSeo} from 'next-seo';
import React from 'react';
import {TableComponent} from 'src/_old/components/table/table.component';
import {Redirect} from 'src/_old/utils/redirect';
import {Revalidate} from 'src/_old/utils/revalidate';
import {DefaultLayout} from 'src/components/_tomove/default-layout';
import {type LatestDto} from 'src/utils/dtos';
import {ServerQuery} from 'src/utils/query';

interface Props {
  latest: LatestDto[];
}

export default function LastPage({latest}: Props) {
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
  const {data, err} = await ServerQuery.last();

  if (!data || err) {
    return Redirect.notFound<Props>();
  }

  return {
    props: {
      latest: data,
    },
    ...Revalidate.minute,
  };
};
