import React from 'react';

/**
 * Old YouTube page
 * Path: /youtube/[id]
 * Redirects from /youtube/[id]?speed=[speed] to /youtube/[id]/[speed]
 *
 * @returns {React.ReactElement} - Old YouTube page component
 */
export default function OldYoutubePage() {
  return <></>;
}

/**
 * Old YouTube page server side props
 *
 * @param {object} context - Next.js context
 * @returns {object} - Next.js redirection object
 */
export function getServerSideProps(context) {
  const {id} = context.params;
  const {speed} = context.query;
  const props = {};

  props.id = id;
  props.speed = parseFloat(speed) || 1;

  return {
    redirect: {
      destination: `/youtube/${props.id}/${props.speed.toString()}`,
      permanent: true,
    },
  };
}
