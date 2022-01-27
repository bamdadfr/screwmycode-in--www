import React from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import {DefaultLayout} from '../layouts/default/default.layout';
import {TableComponent} from '../components/table/table.component';
import {
  serverFetchAndConvertToBase64,
} from '../utils/server-fetch-and-convert-to-base64/server-fetch-and-convert-to-base64';

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

  const request = await axios.get('https://api.screwmycode.in/youtube');
  const response = request.data;
  const redirect = {'redirect': {'destination': '/', 'permanent': false}};

  if (!response.success) {
    return redirect;
  }

  props.top = response.data;

  await Promise.all(props.top.map(async (item) => {
    item.image = await serverFetchAndConvertToBase64(item.image);
  }));

  return {props};
}
