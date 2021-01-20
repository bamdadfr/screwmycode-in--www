import React, { ReactElement } from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import { RecoilRoot } from 'recoil'
import 'normalize.css'
import { App } from './components/app'

const Root = (): ReactElement => (
    <BrowserRouter>
        <RecoilRoot>
            <App />
        </RecoilRoot>
    </BrowserRouter>        
)

ReactDOM.render (
    <Root />,
    document.getElementById ('root'),
)
