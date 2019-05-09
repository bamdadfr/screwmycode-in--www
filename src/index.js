import React from 'react'
import ReactDOM from 'react-dom'
import * as serviceWorker from './serviceWorker'

import 'normalize.css'

import App from './components/app/App'
// import YoutubeParser from './components/test/youtube_parser'

function Root () {
  return (
    <React.Fragment>
      <App />
      {/* <YoutubeParser /> */}
    </React.Fragment>
  )
}

ReactDOM.render(
  <Root />,
  document.getElementById('root'),
)

serviceWorker.register()
