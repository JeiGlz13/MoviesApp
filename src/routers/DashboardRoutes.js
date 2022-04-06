import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import { MoviesScreen } from '../components/movies/MoviesScreen';
import {NavBar} from '../components/UI/NavBar';
import { navigationLinks } from '../data/navigationLinks';

export const DashboardRoutes = () => {
    return (
        <>
          <NavBar />

          <div className = "mt-28">
              <Switch>

                  {
                        navigationLinks.map(({to, Component, id}) => (
                            <Route key={id} exact path = {to} component = {Component} />
                        ))
                  }
                        <Route exact path = '/movie/:movieId' component = {MoviesScreen} />
                  <Redirect to = {navigationLinks[0].to} />
              </Switch>
          </div>
        </>
    )
}
