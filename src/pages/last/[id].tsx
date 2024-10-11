import {type GetStaticPaths, type GetStaticProps} from 'next';
import {type NextParsedUrlQuery} from 'next/dist/server/request-meta';
import {NextSeo} from 'next-seo';
import React from 'react';
import {TableComponent} from 'src/components/table/table.component';
import {DefaultLayout} from 'src/layouts/default/default.layout';
import {type LatestDto} from 'src/utils/dtos';
import {Endpoint} from 'src/utils/endpoint';
import {ServerQuery} from 'src/utils/query';
import {Redirect} from 'src/utils/redirect';
import {Revalidate} from 'src/utils/revalidate';

interface Props {
  latest: LatestDto[];
}

export default function LastSpanPage({latest}: Props) {
  return (
    <>
      <NextSeo title="Latest" />

      <DefaultLayout>
        <TableComponent items={latest} />
      </DefaultLayout>
    </>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const base = '/last';
  const endpoints = Array.from(Object.values(Endpoint))
    .filter((e) => e !== base && e.includes(base))
    .map((e) => e.replace(base, '').substring(1));

  const paths = endpoints.map((e) => ({
    params: {id: e},
  }));

  return {
    paths,
    fallback: 'blocking',
  };
};

interface Params extends NextParsedUrlQuery {
  id: string;
}

export const getStaticProps: GetStaticProps<Props, Params> = async (
  context,
) => {
  const {id} = context.params as Params;
  const {data, err} = await ServerQuery.last(id);

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
