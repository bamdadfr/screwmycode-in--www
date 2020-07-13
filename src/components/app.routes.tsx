import React, { ReactElement } from 'react'
import { Route, Switch } from 'react-router-dom'
import { Home } from './home'
import { Firefox } from './firefox'
import { Youtube } from './youtube'
import { RedirectToHome, isFirefox } from './app.utils'

export const AppRoutes = (): ReactElement => {

    if (isFirefox ()) {

        return (
            <Switch>
    
                <Route exact path="/" component={Home} />
    
                <Route path="/youtube/:id" component={Youtube} />
    
                <Route path="*" component={RedirectToHome} />
    
            </Switch>
        )
    
    } else {

        return <Firefox />
    
    }

}