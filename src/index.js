import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'

import store from './store'
import Flex from './components/app/Flex'

function Root () {
  return (
    <React.Fragment>
      <Provider store={store}>
        <Flex />
      </Provider>
    </React.Fragment>
  )
}

ReactDOM.render(
  <Root />,
  document.getElementById('root'),
)
