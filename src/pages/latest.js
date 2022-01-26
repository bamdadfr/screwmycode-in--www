import React from 'react';
import axios from 'axios';
import {DefaultLayout} from '../layouts/default/default.layout';
import {TableComponent} from '../components/table/table.component';
import {
  serverFetchAndConvertToBase64,
} from '../utils/server-fetch-and-convert-to-base64/server-fetch-and-convert-to-base64';

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

/**
 * @returns {*} - Latest tracks
 */
export async function getServerSideProps() {
  const props = {};

  const request = await axios.get('https://api.screwmycode.in/youtube/latest');
  const response = request.data;
  const redirect = {'redirect': {'destination': '/', 'permanent': false}};

  if (!response.success) {
    return redirect;
  }

  props.latest = response.data;

  await Promise.all(props.latest.map(async (item) => {
    item.image = await serverFetchAndConvertToBase64(item.image);
  }));

  return {props};
}
