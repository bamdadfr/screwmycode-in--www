import React from 'react';
import PropTypes from 'prop-types';
import ky from 'ky';
import {DefaultLayout} from '../layouts/default/default.layout';
import {TableComponent} from '../components/table/table.component';

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
  const props = {};

  const response = await ky.get('https://api.screwmycode.in/youtube').json();
  const redirect = {'redirect': {'destination': '/', 'permanent': false}};

  if (!response.success) {
    return redirect;
  }

  props.top = response.data;

  return {props};
}
