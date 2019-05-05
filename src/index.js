import React from 'react'
import ReactDOM from 'react-dom'
import styled, { createGlobalStyle } from 'styled-components'
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
    font-family: 'Source Sans Pro', sans-serif;
    
    overflow: hidden;
    background: #000;
    //background: linear-gradient(76deg, #333, #cfab48);
    
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
        <BackgroundImage />
        <GlobalStyle />
        <App />
      </Provider>
    </React.Fragment>
  )
}

const BackgroundImage = styled.div`
  background-image: url("https://i.imgur.com/NILLJCB.jpg");
  filter: brightness(100%) blur(2px);
  -webkit-filter: brightness(100%) blur(2px);
  
  height: 100vh;
  
  position: relative;
  
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`


ReactDOM.render(
  <Root />,
  document.getElementById('root'),
)
