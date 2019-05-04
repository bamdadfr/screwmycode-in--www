import React from 'react'
import ReactDOM from 'react-dom'
import { createGlobalStyle } from 'styled-components'
import { createStore, applyMiddleware } from 'redux'
import { createLogger } from 'redux-logger'
import { Provider } from 'react-redux'

import 'tachyons'

import reducers from './reducers/index'
import App from './components/app/_App'

// Redux stuff
const logger = createLogger({
  collapsed: (getState, action, logEntry) => !logEntry.error,
})

const store = createStore(
  reducers,
  applyMiddleware(logger),
)

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Source+Sans+Pro:400,600,800,900');
  
  html {
    overflow: hidden;
    font-family: 'Source Sans Pro', sans-serif;
  }
  
  .mybg1 {
    background-color: #c999d5;
    --mybg-pink: #c999d5;
  }
  
  element {
    --main-bg-color: white;
  }
  
  .myYellow {
    background-color: #efcb68;
    --mybg-yellow: #efcb68;
  }
  
  .myBlue {
    background-color: #160c28;
    --mybg-blue: #160c28;
  }
  
  .myWhite {
    background-color: #e1efe6;
    --mybg-white: #e1efe6;
  }
  
  .myBlack {
    background-color: #000411;
    --myb-black: #000411;
  }
`

function Root () {
  return (
    <React.Fragment>
      <Provider store={store}>
        <GlobalStyle />
        <App />
      </Provider>
    </React.Fragment>
  )
}

ReactDOM.render(
  <Root />,
  document.getElementById('root'),
)
