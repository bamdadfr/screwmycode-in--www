import React from 'react'
import styled from 'styled-components'

import Form from '../main/_Form'
import Player from '../main/_Player'
import Controls from '../main/_Controls'
import Title from '../main/_Title'

export default () => {
  console.log('App render')

  return (
    <React.Fragment>
      <Div>

        <article className="pb5">
          <header className="vh-100 ph6 dt w-100">
            <div className="dtc v-mid cover">

              <div className="flex">

                <div className="w-60 ph0 ph2-m ph3-l">
                  <div className="w-100 vh-75 bg-transparent">

                    <div className="pv4" />

                    <Logo className="pl2 ma0 pa0">
                    screwmycode.in
                    </Logo>

                    <div className="pv4" />

                    <Form />

                  </div>
                </div>

                <div className="w-40 ph0 ph2-m ph3-l bg-transparent">
                  <div className="w-100 vh-75 bg-transparent">

                    <div className="pv5" />

                    <Title />

                    <Player />

                    <div className="pv4" />

                    <Controls />

                  </div>
                </div>

              </div>

            </div>

          </header>
        </article>

      </Div>

    </React.Fragment>
  )
}

const Div = styled.div`
  margin-top: -100vh;
  position: relative;
  color: white;
`

const Logo = styled.h1`
  font-size: 5rem;
  -webkit-text-fill-color: transparent;
  -webkit-text-stroke: 2px white;
  
  // Scaling
  transform: scale(1, 1.1);
  -webkit-transform: scale(1, 1.1); /* Safari and Chrome */
  -moz-transform: scale(1, 1.1); /* Firefox */
  -ms-transform: scale(1, 1.1); /* IE 9+ */
  -o-transform: scale(1, 1.1); /* Opera */
  
`
