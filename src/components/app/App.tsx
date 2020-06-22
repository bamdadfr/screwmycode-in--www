import React, { ReactElement } from 'react'
import { BrowserRouter, Link, Redirect, Route, Switch } from 'react-router-dom'
import envService from '../../services/env'
import Corner from '../corner/Corner'
import Firefox from '../firefox/Firefox'
import Form from '../form/Form'
import Youtube from '../routes/Youtube'
import Three from '../three/Three'
import Toast from '../toast/Toast'
import './app.css'

interface IProps {
    browser: any,
}

export default (props: IProps): ReactElement => {

    const { browser } = props

    const redirect = {
        'home': (): ReactElement => <Redirect to="/" />,
    }

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
        three.ref.current.hidden = !envService.getBackgroundInitState ()
    
    }, [three])

    return (
        <>
            <three.JSX />
            <Toast />
            <BrowserRouter>
                <div className="page">
                    <Corner toggleCB={(t: boolean): void => three.toggle.callback (t)} />
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
                                <Switch>
                                    <Route exact path="/">
                                        <Form browser={browser} />
                                    </Route>
                                    <Route path="/firefox" component={Firefox} />
                                    <Route path="/youtube/:id" component={Youtube} />
                                    <Route path="*" component={redirect.home} />
                                </Switch>
                            </div>
                        </div>
                    </div>
                </div>
            </BrowserRouter>
        </>
    )

}
