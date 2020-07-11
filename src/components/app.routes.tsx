import React, { ReactElement } from 'react'
import { Route, Switch } from 'react-router-dom'
import { Home } from './home'
import { Firefox } from './firefox'
import { Youtube } from './youtube'
import { AppUtilsRedirectHome } from './app.utils'

export const AppRoutes = (): ReactElement => {

    return (
        <Switch>
            <Route exact path="/">
                <Home />
            </Route>
            <Route path="/firefox" component={Firefox} />
            <Route path="/youtube/:id" component={Youtube} />
            <Route path="*" component={AppUtilsRedirectHome} />
        </Switch>
    )

}