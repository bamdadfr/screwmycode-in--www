import React, {useCallback} from 'react';
import axios from 'axios';
import styled from 'styled-components';
import {Icon} from '@iconify/react';
import play from '@iconify/icons-mdi/play';
import {useRouter} from 'next/router';
import {DefaultLayout} from '../layouts/default/default.layout';

const Container = styled.div`
  max-height: 20em;

  display: grid;
  grid-gap: 0.5em;

  overflow-y: scroll;

  img {
    width: 5em;
    height: 5em;
    object-fit: cover;
  }
`;

const Item = styled.div`
  display: grid;
  align-items: center;
  justify-content: center;
  grid-template-columns: 6em 1fr 5em;

  transition: color 200ms ease-in-out, background 200ms ease-in-out;

  &:hover {
    cursor: pointer;
    color: ${(props) => props.theme.highlight};
    background: ${(props) => props.theme.background.highlight};
  }
`;

const PlayButton = styled.button`
  font-size: 2em;
  transform: translateY(5px);
`;

/**
 * Latest page
 * Path: /latest
 *
 * @param {*} props - React props
 * @param {*[]} props.latest - Latest tracks
 * @returns {React.ReactElement} - Latest page component
 */
export default function LatestPage({latest}) {
  const router = useRouter();

  const onClick = useCallback((id) => {
    router.push(`/youtube/${id}/1`);
  }, [router]);

  return (
    <>
      <DefaultLayout>
        <Container>
          {latest.map((item) => (
            <Item
              key={item.id}
              onClick={() => onClick(item.id)}
            >
              <img src={item.image} alt="artwork" />
              <span>{item.title}</span>
              <span>
                <PlayButton type="button" aria-label="play">
                  <Icon icon={play} />
                </PlayButton>
              </span>
            </Item>
          ))}
        </Container>
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

  return {props};
}
