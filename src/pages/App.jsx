import React from 'react'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import { Home } from './Home/Home';
import { Login } from './Login/Login';

export function App() {
    return (
        <Router>
            <Switch>
                <Route path="/" exact={true}>
                    <Home/>
                </Route>
                <Route path="/login">
                    <Login/>
                </Route>
            </Switch>
        </Router>
    )
}