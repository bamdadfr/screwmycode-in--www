import React from 'react'

import './app.css'

import Form from '../main/_Form'
import PlayerTitle from '../main/_PlayerTitle'
import Player from '../main/_Player'
import Controls from '../main/_Controls'

export default function () {
  console.log('App render')
  return (
    <React.Fragment>
      <div className="backgroundImage" />
      <div className="page">

        <div className="container">
          <div className="title">
            screwmycode.in
          </div>

          <div className="main">

            <div className="main-item main-spacer" />

            <div className="main-item">
              <Form />
            </div>

            <div className="main-item">
              <PlayerTitle />
              <Player />
              <Controls />
            </div>

          </div>
        </div>

      </div>
    </React.Fragment>
  )
}
