import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route
  } from "react-router-dom";
import { GangsterScreen } from '../components/Gangster/GangsterScreen';
import { LoginScreen } from '../components/login/LoginScreen';
  import {NavBar} from '../components/UI/NavBar';
import { DashboardRoutes } from './DashboardRoutes';


export const AppRouter = () => {
    return (
        <Router>
      <div>

        <Switch>
          <Route exact path = "/login" component={LoginScreen} />
          <Route path = "/" component = {DashboardRoutes} />

        </Switch>
      </div>
    </Router>
    )
}
