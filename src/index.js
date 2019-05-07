import React from 'react'
import ReactDOM from 'react-dom'

import App from './components/app/App'

function Root () {
  return (
    <React.Fragment>
      <App />
    </React.Fragment>
  )
}

ReactDOM.render(
  <Root />,
  document.getElementById('root'),
)
