import React, { useEffect, useState, useRef } from 'react'
import { Redirect } from 'react-router-dom'
import './home.css'
import { useRecoilState } from 'recoil'
import { RoutesYoutubeUtilsGetIDFromURL } from './routes-youtube-utils'
import { playerStateTitle } from './player-state'

export const Home = () => {

    const [route, setRoute] = useState (null)
    const [, setTitle] = useRecoilState (playerStateTitle)
    const inputRef = useRef (null)

    useEffect (() => {

        setTitle ('')

    }, [setTitle])

    const onSubmit = (e) => {

        e.preventDefault ()

        const target = e.target[0]
        const id = RoutesYoutubeUtilsGetIDFromURL (target.value)

        if (id) {

            target.blur ()

            setRoute (`/youtube/${id}`)

        } else {

            target.value = ''

        }

    }

    useEffect (() => {

        inputRef.current.focus ()

    }, [inputRef])

    if (route !== null) return <Redirect to={route}/>

    return (
        <>
            <form onSubmit={onSubmit}>
                <div className="form">
                    <input ref={inputRef} placeholder="insert youtube link here" type="text"/>
                </div>
                <div className="form">
                    <input type="submit" value="submit"/>
                </div>
            </form>
        </>
    )

}
