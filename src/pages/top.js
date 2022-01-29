import React from 'react';
import PropTypes from 'prop-types';
import {DefaultLayout} from '../layouts/default/default.layout';
import {TableComponent} from '../components/table/table.component';
import {apiQuery} from '../utils/api-query/api-query';
import {
  invokeRedirection,
} from '../utils/invoke-redirection/invoke-redirection';

const propTypes = {
  top: PropTypes.arrayOf(
    PropTypes.object.isRequired,
  ).isRequired,
};

/**
 * Top page
 * Path: /top
 *
 * @param {*} props - React props
 * @param {*[]} props.top - Top list
 * @returns {React.ReactElement} - Top page component
 */
export default function TopPage({top}) {
  return (
    <>
      <DefaultLayout>
        <TableComponent table={top} />
      </DefaultLayout>
    </>
  );
}

TopPage.propTypes = propTypes;

/**
 * @returns {*} - Top tracks
 */
export async function getServerSideProps() {
  try {
    const data = await apiQuery('/top');

    const props = {};
    props.top = data;

    return {props};
  } catch {
    return invokeRedirection();
  }
}
