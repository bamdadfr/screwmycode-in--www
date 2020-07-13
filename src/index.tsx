import React, { ReactElement } from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import * as serviceWorker from './serviceWorker'
import 'normalize.css'
import { App } from './components/app'

const Root = (): ReactElement => {

    return (
        <BrowserRouter>
            <App />
        </BrowserRouter>        
    )

}

ReactDOM.render (
    <Root />,
    document.getElementById ('root'),
)

serviceWorker.register ()
