import React, { ReactElement, useEffect, useState, useRef } from 'react'
import { Redirect } from 'react-router-dom'
import './home.styles.css'
import { useRecoilState } from 'recoil'
import { getIDFromURL } from './routes.youtube.utils'
import { playerStateTitle } from './player.state'

export const Home = (): ReactElement => {

    const [route, setRoute] = useState<string|null> (null)
    const [, setTitle] = useRecoilState (playerStateTitle)
    const inputRef: any = useRef (null)

    useEffect (() => {

        setTitle ('')
    
    }, [setTitle])

    const onSubmit = (e: any): ReactElement|void|any => {

        e.preventDefault ()

        const target = e.target[0]
        const id = getIDFromURL (target.value)

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

    if (route !== null) return <Redirect to={route} />

    return (
        <>
            <form onSubmit={onSubmit}>
                <div className="form">
                    <input ref={inputRef} placeholder="insert youtube link here" type="text" />
                </div>
                <div className="form">
                    <input type="submit" value="submit" />
                </div>
            </form>
        </>
    )

}
