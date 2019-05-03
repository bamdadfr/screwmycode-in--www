import React from 'react'
import ReactDOM from 'react-dom'
import {createGlobalStyle} from 'styled-components'

import App from './components/App'

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
  }
  
  body {
    color: white;
  }
  
  .wrapper {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
  }
  
  .wrapper > * {
    padding: 20px;
  }
  
  .page-header {
    background: #592E83;
  }
  
  .page-main {
    flex-grow: 1;
    background: #331E4D;
  }
  
  .page-footer {
    background: #9984D4;
  }
`

function Root () {
  return (
    <React.Fragment>
      <GlobalStyle/>
      <App />
    </React.Fragment>
  )
}

ReactDOM.render(
  <Root />,
  document.getElementById('root')
)
