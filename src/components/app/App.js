import React from 'react'
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom'

import './app.css'

import Form from '../form/Form'
import Youtube from '../routes/Youtube'

export default function () {
  console.log('App render')
  return (
    <React.Fragment>
      <Router>
        <div className="backgroundImage" />
        <div className="page">

          <div className="container">
            <div className="title">
              <NavLink to="/">
                screwmycode.in
              </NavLink>
            </div>

            <div className="main">

              <div className="main-item main-spacer" />

              <div className="main-item">
                <Route exact path="/" component={Form} />
                <Route path="/youtube/:id" component={Youtube} />
              </div>

            </div>
          </div>

        </div>
      </Router>
    </React.Fragment>
  )
}
