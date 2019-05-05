import React from 'react'

import './Flex.css'

import '../main/Title'
import Title from '../main/_Title'
import Form from '../main/_Form'
import Player from '../main/_Player'
import Controls from '../main/_Controls'

export default function () {
  return (
    <React.Fragment>
      <div className="backgroundImage" />
      <div className="page">
        <div className="container">
          <div className="title">
            screwmycode.in
          </div>
          <div className="main">
            Main
          </div>
        </div>
      </div>
    </React.Fragment>
  )
}
