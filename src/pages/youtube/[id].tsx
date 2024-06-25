import React, {ReactElement} from 'react';
import {GetServerSidePropsContext, GetServerSidePropsResult} from 'next';

/**
 * Old YouTube page
 * Path: /youtube/[id]
 * Redirects from /youtube/[id]?speed=[speed] to /youtube/[id]/[speed]
 */
export default function OldYoutubePage(): ReactElement {
  return <div />;
}

/**
 * Old YouTube page server side props
 * @param {object} context - Next.js context
 * @returns {object} - Next.js redirection object
 */
export function getServerSideProps(
  context: GetServerSidePropsContext,
): GetServerSidePropsResult<unknown> {
  const id = context.params.id as string;
  const speed = context.query.speed as string;

  const props = {
    id,
    speed: parseFloat(speed) || 1,
  };

  return {
    redirect: {
      destination: `/youtube/${props.id}/${props.speed.toString()}`,
      permanent: true,
    },
  };
}
