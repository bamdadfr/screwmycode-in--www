import React, { ReactElement } from 'react'
import { BrowserRouter, Link } from 'react-router-dom'
import { getBackgroundInitState } from './app.env'
import { Header } from './header'
import { Three } from './three'
import { Toast } from './toast'
import './app.styles.css'
import { AppRoutes } from './app.routes'

export const App = (): ReactElement => {

    const three = {
        'ref': React.useRef<any> (null),
        'toggle': {
            'callback': (t: boolean): void => {

                three.ref.current.hidden = !(t && three.ref.current.hidden === true)
            
            },
        },
        'JSX': (): ReactElement => (
            <>
                <div ref={three.ref} className="three-container" />
                <Three domRef={three.ref} />
            </>
        ),
    }

    React.useEffect (() => {

        // init value of threejs background
        three.ref.current.hidden = !getBackgroundInitState ()
    
    }, [three])

    return (
        <>
            <three.JSX />
            <Toast />
            <BrowserRouter>
                <div className="page">
                    <Header toggleCB={(t: boolean): void => three.toggle.callback (t)} />
                    <div className="container">
                        <div className="title-spacer" />
                        <div className="title">
                            <Link to="/">
                                screwmycode.in
                            </Link>
                        </div>
                        <div className="main">
                            <div className="main-item main-spacer" />
                            <div className="main-item">
                                <AppRoutes />
                            </div>
                        </div>
                    </div>
                </div>
            </BrowserRouter>
        </>
    )

}
