import React from 'react'
import {
  BrowserRouter as Router, Route, Link, Switch, Redirect,
} from 'react-router-dom'

import './app.css'

import Form from '../form/Form'
import Youtube from '../routes/Youtube'

export default function () {
  const MyRedirect = () => <Redirect to="/" />

  console.log('App render')
  return (
    <React.Fragment>
      <Router>
        <div className="backgroundImage" />
        <div className="page">

          <div className="container">
            <div className="title">
              <Link to="/">
                screwmycode.in
              </Link>
            </div>

            <div className="main">

              <div className="main-item main-spacer" />

              <div className="main-item">
                <Switch>
                  <Route exact path="/" component={Form} />
                  <Route path="/youtube/:id" component={Youtube} />
                  <Route path="*" component={MyRedirect} />
                </Switch>
              </div>

            </div>
          </div>

        </div>
      </Router>
    </React.Fragment>
  )
}
