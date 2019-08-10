import React from 'react'
import {
  BrowserRouter, Route, Link, Switch, Redirect,
} from 'react-router-dom'

import { FaQuestion } from 'react-icons/fa'

import './app.css'

import Firefox from '../firefox/Firefox'
import Form from '../form/Form'
import Youtube from '../routes/Youtube'
import Three from '../three/Three'

export default () => {
  const threeRef = React.useRef(null)
  const redirectToHome = () => <Redirect to="/" />

  console.log('App render')
  return (
    <React.Fragment>

      <div ref={threeRef} className="three-container" />
      <Three domRef={threeRef} />

      <BrowserRouter>

        <div className="page">

          <div className="corner-help">
            <FaQuestion />
          </div>

          <div className="container">

            <div className="title-spacer" />

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
                  <Route path="/firefox" component={Firefox} />
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
