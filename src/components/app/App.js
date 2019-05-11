import React from 'react'
import {
  BrowserRouter, Route, Link, Switch, Redirect,
} from 'react-router-dom'

import './app.css'

import Form from '../form/Form'
import Youtube from '../routes/Youtube'

export default function () {
  const redirectToHome = () => <Redirect to="/" />

  console.log('App render')
  return (
    <React.Fragment>
      <BrowserRouter>

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
                  <Route path="*" component={redirectToHome} />
                </Switch>
              </div>

            </div>
          </div>

        </div>
      </BrowserRouter>
    </React.Fragment>
  )
}
