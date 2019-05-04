import React from 'react'
import ReactDOM from 'react-dom'
import { createGlobalStyle } from 'styled-components'
import { Provider } from 'react-redux'
import 'tachyons'

import store from './store'
import App from './components/app/_App'

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Source+Sans+Pro:400,600,800,900');
  
  .mybg1 {
    background-color: #c999d5;
  }
  
  .myYellow {
    background-color: #efcb68;
  }
  
  .myBlue {
    background-color: #160c28;
  }
  
  .myWhite {
    background-color: #e1efe6;
  }
  
  .myBlack {
    background-color: #000411;
  }
  
  html {
    overflow: hidden;
    font-family: 'Source Sans Pro', sans-serif;
    
    background: linear-gradient(76deg, #c999d5, #efcb68);
    //background-size: 400% 400%;
    //
    //-webkit-animation: AnimationName 4s ease infinite;
    //-moz-animation: AnimationName 4s ease infinite;
    //animation: AnimationName 4s ease infinite;
    //
    //@-webkit-keyframes AnimationName {
    //    0%{background-position:84% 0%}
    //    50%{background-position:17% 100%}
    //    100%{background-position:84% 0%}
    //}
    //@-moz-keyframes AnimationName {
    //    0%{background-position:84% 0%}
    //    50%{background-position:17% 100%}
    //    100%{background-position:84% 0%}
    //}
    //@keyframes AnimationName { 
    //    0%{background-position:84% 0%}
    //    50%{background-position:17% 100%}
    //    100%{background-position:84% 0%}
    //}    
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
