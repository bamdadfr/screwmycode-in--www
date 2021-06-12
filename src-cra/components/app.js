import React from 'react'
import { Link } from 'react-router-dom'
import { Header } from './header'
import { Three } from './three'
import { Toast } from './toast'
import { Routes } from './routes'
import './app.css'
import { AppConstants } from './app-constants'
import { AppTitle } from './app-title'

export const App = () => (
    <>
        <AppTitle/>
        <Three/>
        <Toast/>
        <div className="page">
            <Header/>
            <div className="container">
                <div className="title-spacer"/>
                <div className="title">
                    <Link to="/">
                        {AppConstants.title}
                    </Link>
                </div>
                <div className="main">
                    <div className="main-item main-spacer"/>
                    <div className="main-item">
                        <Routes/>
                    </div>
                </div>
            </div>
        </div>
    </>
)
