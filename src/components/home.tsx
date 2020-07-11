import React, { ReactElement } from 'react'
import { Redirect } from 'react-router-dom'
import { AppUtilsRedirectIfNotFirefox } from './app.utils'
import './home.styles.css'

export const Home = (): React.ReactElement => {

    const [routeState, setRouteState] = React.useState<string|null> (null)

    AppUtilsRedirectIfNotFirefox ()
    
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
        'parse': (url: string): string => {

            const youtubeRegEx = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/
            const match = url.match (youtubeRegEx)
    
            if (match && match[2].length === 11) {
    
                return match[2]
            
            }
    
            return 'error'
    
        },
        'onSubmit': (e: any): void => {

            e.preventDefault ()

            const target = e.target[0]
            const id = form.parse (target.value)

            if (id !== 'error') {
    
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

    React.useEffect (() => {

        // resetting document title
        document.title = 'screwmycode.in'

        if (form.input.ref && form.input.ref.current) {

            form.input.ref.current.focus ()

        }
    
    }, [form.input.ref])

    if (route.state.get !== null) {

        return route.redirect ()
    
    }

    return <form.JSX />

}
