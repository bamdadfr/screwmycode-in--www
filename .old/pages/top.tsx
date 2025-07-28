import {type GetStaticProps} from 'next';
import {NextSeo} from 'next-seo';
import React from 'react';
import {TableComponent} from 'src/_old/components/table/table.component';
import {Redirect} from 'src/_old/utils/redirect';
import {Revalidate} from 'src/_old/utils/revalidate';
import {DefaultLayout} from 'src/components/_tomove/default-layout';
import {type TopDto} from 'src/utils/dtos';
import {ServerQuery} from 'src/utils/query';

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
