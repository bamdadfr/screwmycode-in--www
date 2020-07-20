import React, { ReactElement } from 'react'
import { Route, Switch } from 'react-router-dom'
import { Home } from './home'
import { Firefox } from './firefox'
import { RoutesYoutube } from './routes.youtube'
import { RedirectToHome, isFirefox } from './app.utils'

export const Routes = (): ReactElement => {

    if (isFirefox ()) {

        return (
            <Switch>
    
                <Route exact path="/" component={Home} />
    
                <Route path="/youtube/:id" component={RoutesYoutube} />
    
                <Route path="*" component={RedirectToHome} />
    
            </Switch>
        )
    
    } else {

        return <Firefox />
    
    }

}