import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import { RecoilRoot } from 'recoil'
import * as Sentry from '@sentry/react'
import { Integrations } from '@sentry/tracing'
import 'sass-reset'
import { App } from './components/app'

Sentry.init ({
    'dsn': 'https://1bac0a361efe4aaeacf93ce9e301b207@o574972.ingest.sentry.io/5726647',
    'integrations': [new Integrations.BrowserTracing ()],

    // Set tracesSampleRate to 1.0 to capture 100%
    // of transactions for performance monitoring.
    // We recommend adjusting this value in production
    'tracesSampleRate': 1.0,
})

const Root = () => (
    <BrowserRouter>
        <RecoilRoot>
            <App/>
        </RecoilRoot>
    </BrowserRouter>
)

ReactDOM.render (
    <Root/>,
    document.getElementById ('root'),
)
