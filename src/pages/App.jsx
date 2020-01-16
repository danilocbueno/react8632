import React from 'react'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import { Home } from './Home/Home'
import { Login } from './Login/Login'
import { Logout } from './Logout/Logout';

import { Notificacao } from './../components/Notificacao/Notificacao';

export function App() {
    return (
        <Notificacao>
            <Router>
                <Switch>
                    <Route path="/" exact={true}>
                        <Home/>
                    </Route>
                    <Route path="/login">
                        <Login/>
                    </Route>
                    <Route path="/logout" >
                        <Logout/>
                    </Route>
                </Switch>
            </Router>
        </Notificacao>
    )
}