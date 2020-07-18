import React, { ReactElement } from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import * as serviceWorker from './serviceWorker'
import 'normalize.css'
import { state } from './components/state'
import { App } from './components/app'

const Root = (): ReactElement => {

    return (
        <BrowserRouter>
            <Provider store={state}>
                <App />
            </Provider>
        </BrowserRouter>        
    )

}

ReactDOM.render (
    <Root />,
    document.getElementById ('root'),
)

serviceWorker.register ()
