import React from 'react'
import { Redirect, Route, Switch, BrowserRouter as Router } from "react-router-dom"
import { Navigation } from './components/Navigation/Navigation'
import { Info_Page } from './components/Pages/Info_page/Info_page'
import { Records_Page } from './components/Pages/Records_page/Records_page'
import { SetUp_Page } from './components/Pages/SetUp_page/SetUp_page'
import { TV_Page } from './components/Pages/TV_page/TV_page'


export default function Routes() {

    return (
        <Router>
            <div className='main'>
            <Navigation />
            <Switch>
                <Route path="/info">
                    <Info_Page />
                </Route>
                <Route path="/tv/:nav">
                    <TV_Page />
                </Route>
                <Route exact path="/tv">
                    <TV_Page />
                </Route>
                <Route path="/setup">
                    <SetUp_Page />
                </Route>
                <Route path="/records">
                    <Records_Page />
                </Route>
                <Redirect to='/tv' />
            </Switch>
            </div>
        </Router>
    )
}
