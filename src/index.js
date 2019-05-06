import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'

import store from './store'
import App from './components/app/_App'

function Root () {
  return (
    <React.Fragment>
      <Provider store={store}>
        <App />
      </Provider>
    </React.Fragment>
  )
}

ReactDOM.render(
  <Root />,
  document.getElementById('root'),
)
