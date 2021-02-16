import React from 'react'
import { Route, Switch } from 'react-router-dom'
import { Home } from './home'
import { Firefox } from './firefox'
import { RoutesYoutube } from './routes-youtube'
import { AppUtilsRedirectToHome, AppUtilsIsFirefox } from './app-utils'

export const Routes = () => {

    if (AppUtilsIsFirefox ()) {

        return (
            <Switch>

                <Route exact path="/" component={Home}/>

                <Route path="/youtube/:id" component={RoutesYoutube}/>

                <Route path="*" component={AppUtilsRedirectToHome}/>

            </Switch>
        )

    } else {

        return <Firefox/>

    }

}