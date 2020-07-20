import React, { ReactElement, useEffect } from 'react'
import { Redirect } from 'react-router-dom'
import './home.styles.css'
import { useRecoilState } from 'recoil'
import { getIDFromURL } from './routes.youtube.utils'
import { playerStateTitle } from './player.state'

export const Home = (): ReactElement => {

    const [routeState, setRouteState] = React.useState<string|null> (null)
    const [, setTitle] = useRecoilState (playerStateTitle)

    useEffect (() => {

        setTitle ('')
    
    }, [setTitle])

    const route = {
        'state': {
            'get': routeState,
            'set': setRouteState,
        },
        'redirect': (): ReactElement => <Redirect to={`/${route.state.get}`} />,
    }

    const form = {
        'input': {
            'ref': React.useRef<any> (null),
        },
        'onSubmit': (e: any): void => {

            e.preventDefault ()

            const target = e.target[0]
            const id = getIDFromURL (target.value)

            if (id) {
    
                target.blur ()
    
                route.state.set (`youtube/${id}`)
            
            } else {
    
                target.value = ''
            
            }
    
        },
        'JSX': (): ReactElement => (
            <>
                <form onSubmit={(e): void => form.onSubmit (e)}>
                    <div className="form">
                        <input ref={form.input.ref} placeholder="insert youtube link here" type="text" />
                    </div>
                    <div className="form">
                        <input type="submit" value="submit" />
                    </div>
                </form>
            </>
        ),
    }

    useEffect (() => {

        if (form.input.ref && form.input.ref.current) {

            form.input.ref.current.focus ()

        }
    
    }, [form.input.ref])

    if (route.state.get !== null) return route.redirect ()

    return <form.JSX />

}
