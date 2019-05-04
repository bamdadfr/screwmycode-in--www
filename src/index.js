import React from 'react'
import ReactDOM from 'react-dom'
import { createGlobalStyle } from 'styled-components'

import 'tachyons'

import App from './components/App'

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Source+Sans+Pro:400,600,800,900');
  
  html {
    //overflow: hidden;
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
      <GlobalStyle />
      <App />
    </React.Fragment>
  )
}

ReactDOM.render(
  <Root />,
  document.getElementById('root')
)
