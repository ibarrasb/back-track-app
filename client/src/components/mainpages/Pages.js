import React, {useContext} from 'react';
import {Switch, Route } from 'react-router-dom'
import Login from './auth/Login'
import Register from './auth/Register'
import Home from './home/Home'
import NotFound from './utils/not_found/NotFound'
import LandingPage from './landing/Page'

import {GlobalState} from '../../GlobalState'

function Pages() {
    const state = useContext(GlobalState)
    const [isLogged] = state.UserAPI.isLogged

    return (
        <Switch>
            <Route path='/' exact component={isLogged ? Home : LandingPage}/>
            <Route path='/login' exact component={isLogged ? NotFound : Login}/>
            <Route path='/register' exact component={isLogged ? NotFound : Register}/>

            <Route path='*' exact component={NotFound}/>
        </Switch>
    );
}

export default Pages;
