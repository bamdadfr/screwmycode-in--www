import React from 'react'
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom'

import './app.css'

import Form from '../main/_Form'
import Player from '../main/_Player'

export default function ({
  player, setUrl, setId, setTitle,
}) {
  const redirectToHome = () => {
    if (player.url !== null && player.id !== null) {
      setTitle(null)
      setId(null)
      setUrl(null)
    }
  }

  console.log('App render')
  return (
    <React.Fragment>
      <Router>
        <div className="backgroundImage" />
        <div className="page">

          <div className="container">
            <div className="title">
              <NavLink to="/" onClick={() => redirectToHome()}>
                screwmycode.in
              </NavLink>
            </div>

            <div className="main">

              <div className="main-item main-spacer" />

              <div className="main-item">
                <Route exact path="/" component={Form} />
                <Route path="/player" component={Player} />
              </div>

            </div>
          </div>

        </div>
      </Router>
    </React.Fragment>
  )
}
