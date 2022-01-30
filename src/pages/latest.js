import React from 'react';
import PropTypes from 'prop-types';
import {DefaultLayout} from '../layouts/default/default.layout';
import {TableComponent} from '../components/table/table.component';
import {apiQuery} from '../utils/api-query/api-query';
import {
  invokeRedirection,
} from '../utils/invoke-redirection/invoke-redirection';
import {MetaComponent} from '../components/meta/meta.component';

const propTypes = {
  latest: PropTypes.arrayOf(
    PropTypes.object.isRequired,
  ).isRequired,
};

/**
 * Latest page
 * Path: /latest
 *
 * @param {*} props - React props
 * @param {*[]} props.latest - Latest tracks
 * @returns {React.ReactElement} - Latest page component
 */
export default function LatestPage({latest}) {
  return (
    <>
      <MetaComponent description="Latest" />
      <DefaultLayout customMeta>
        <TableComponent table={latest} />
      </DefaultLayout>
    </>
  );
}

LatestPage.propTypes = propTypes;

/**
 * @returns {*} - Latest tracks
 */
export async function getServerSideProps() {
  try {
    const data = await apiQuery('/latest');

    const props = {};
    props.latest = data;

    return {props};
  } catch {
    return invokeRedirection();
  }
}
