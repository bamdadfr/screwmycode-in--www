import React, { ReactElement } from 'react'
import ReactDOM from 'react-dom'
import * as serviceWorker from './serviceWorker'
import 'normalize.css'
import { App } from './components/app'
import { AppUtilsRedirectIfNotFirefox } from './components/app.utils'

const Root = (): ReactElement => {

    AppUtilsRedirectIfNotFirefox ()

    return <App />

}

ReactDOM.render (
    <Root />,
    document.getElementById ('root'),
)

serviceWorker.register ()
