import React from 'react'
import ReactDOM from 'react-dom'
import * as serviceWorker from './serviceWorker'

import 'normalize.css'

import Three from './components/three/Three'
import App from './components/app/App'

// import YoutubeParser from './components/test/youtube_parser'

const Root = () => {
  const threeRef = React.useRef(null)

  return (
    <React.Fragment>

      <div ref={threeRef} className="three-container" />
      <Three domRef={threeRef} />

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
