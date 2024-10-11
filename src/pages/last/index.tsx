import {type GetStaticProps} from 'next';
import {NextSeo} from 'next-seo';
import React from 'react';
import {TableComponent} from 'src/components/table/table.component';
import {DefaultLayout} from 'src/layouts/default/default.layout';
import {type LatestDto} from 'src/utils/dtos';
import {ServerQuery} from 'src/utils/query';
import {Redirect} from 'src/utils/redirect';
import {Revalidate} from 'src/utils/revalidate';

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
  console.log({data, err});

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
