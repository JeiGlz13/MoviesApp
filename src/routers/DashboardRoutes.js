import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import { GangsterScreen } from '../components/Gangster/GangsterScreen';
import { MoviesScreen } from '../components/movies/MoviesScreen';
import { SearchScreen } from '../components/search/SearchScreen';
import {NavBar} from '../components/UI/NavBar';
import { WarScreen } from '../components/War/WarScreen';

export const DashboardRoutes = () => {
    return (
        <>
          <NavBar />

          <div className = "container mt-2">
              <Switch>
                  <Route exact path = "/war" component = {WarScreen} />
                  <Route exact path = "/movie/:movieId" component = {MoviesScreen} />
                  <Route exact path = "/gangsters" component = {GangsterScreen} />
                  <Route exact path = "/search" component = {SearchScreen} />

                  <Redirect to = "/gangsters" />
              </Switch>
          </div>
        </>
    )
}
