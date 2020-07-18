import React, { ReactElement, useRef } from 'react'
import { Link } from 'react-router-dom'
import { Header } from './header'
import { Three } from './three'
import { Toast } from './toast'
import { AppRoutes } from './app.routes'
import './app.styles.css'

export const App = (): ReactElement => {

    const threeRef = useRef<any> (null)

    return (
        <>
            <div ref={threeRef} className="three-container" />
            <Three domRef={threeRef} />
            <Toast />
            <div className="page">
                <Header />
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
        </>
    )

}