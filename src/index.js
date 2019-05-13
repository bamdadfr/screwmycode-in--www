import React from 'react'
import ReactDOM from 'react-dom'
import * as serviceWorker from './serviceWorker'

import 'normalize.css'

import App from './components/app/App'

const Root = () => (
  <React.Fragment>
    <App />
  </React.Fragment>
)

ReactDOM.render(
  <Root />,
  document.getElementById('root'),
)

serviceWorker.register()
