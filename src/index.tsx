import React from 'react'
import ReactDOM from 'react-dom'
import 'normalize.css'
import { detect } from 'detect-browser'
import * as serviceWorker from './serviceWorker'
// components
import App from './components/app/App'

const browser: any = detect ()

const Root = (): React.ReactElement => {

    if (browser.name !== 'firefox' && window.location.pathname !== '/firefox') {

        window.location.href = `${window.location.origin}/firefox`
    
    }

    return <App browser={browser} />

}

ReactDOM.render (
    <Root />,
    document.getElementById ('root'),
)

serviceWorker.register ()
