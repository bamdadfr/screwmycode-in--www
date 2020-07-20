import React, { ReactElement, useEffect } from 'react'
import { useRecoilValue } from 'recoil'
import { Link } from 'react-router-dom'
import { Header } from './header'
import { Three } from './three'
import { Toast } from './toast'
import { Routes } from './routes'
import './app.styles.css'
import { appTitle } from './app.utils'
import { playerStateTitle } from './player.state'

export const App = (): ReactElement => {

    const title = useRecoilValue (playerStateTitle)

    useEffect (() => {

        if (title) {

            document.title = `${appTitle} - ${title}` 

        } else {

            document.title = appTitle
        
        }
    
    }, [title])

    return (
        <>
            <Three />
            <Toast />
            <div className="page">
                <Header />
                <div className="container">
                    <div className="title-spacer" />
                    <div className="title">
                        <Link to="/">
                            {appTitle}
                        </Link>
                    </div>
                    <div className="main">
                        <div className="main-item main-spacer" />
                        <div className="main-item">
                            <Routes />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )

}