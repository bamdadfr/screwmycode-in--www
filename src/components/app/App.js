import React from 'react'
import styled from 'styled-components'
import WordArt from 'react-wordart'

import { FaRegPauseCircle, FaRegPlayCircle, FaRegStopCircle } from 'react-icons/fa'
import Main from './Main'
import Form from '../main/_Form'
import Player from '../main/_Player'
import Controls from '../main/_Controls'

export default () => (
  <React.Fragment>

    <article className="pb5">
      <header className="vh-100 mybg1 ph6 dt w-100">
        <div className="dtc v-mid cover">

          <div className="flex">

            <div className="w-60 ph0 ph2-m ph3-l mybg1">
              <div className="w-100 vh-75 bg-transparent">

                <div className="pv4" />

                <Title className="pl2 ma0 pa0">
                    screwmycode.in
                </Title>

                <div className="pv4" />

                <Form />

              </div>
            </div>

            <div className="w-40 ph0 ph2-m ph3-l bg-transparent">
              <div className="w-100 vh-75 bg-transparent">

                <div className="pv5" />

                <Player />

                <div className="pv4" />

                <Controls />

              </div>
            </div>

          </div>

        </div>

      </header>
    </article>

    {/* <div className="wrapper"> */}
    {/*  <header className="page-header"> */}
    {/*    screwmycode.in */}
    {/*  </header> */}
    {/*  <main className="page-main"> */}
    {/*    <Main /> */}
    {/*  </main> */}
    {/*  <footer className="page-footer"> */}
    {/*    Footer */}
    {/*  </footer> */}
    {/* </div> */}
  </React.Fragment>
)

const Title = styled.h1`
  font-size: 5rem;
  -webkit-text-fill-color: transparent;
  -webkit-text-stroke: 2px #000411;
  
  filter: blur(1px);
  
  // Scaling
  transform: scale(1, 1.1);
  -webkit-transform: scale(1, 1.1); /* Safari and Chrome */
  -moz-transform: scale(1, 1.1); /* Firefox */
  -ms-transform: scale(1, 1.1); /* IE 9+ */
  -o-transform: scale(1, 1.1); /* Opera */
  
`
