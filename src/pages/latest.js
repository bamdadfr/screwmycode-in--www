import React from 'react';
import PropTypes from 'prop-types';
import ky from 'ky';
import {DefaultLayout} from '../layouts/default/default.layout';
import {TableComponent} from '../components/table/table.component';

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
      <DefaultLayout>
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
  const props = {};

  const response = await ky.get('https://api.screwmycode.in/youtube/latest').json();
  const redirect = {'redirect': {'destination': '/', 'permanent': false}};

  if (!response.success) {
    return redirect;
  }

  props.latest = response.data;

  return {props};
}
