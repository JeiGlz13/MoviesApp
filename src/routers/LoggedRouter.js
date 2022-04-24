import React from 'react';
import {  Navigate, Route, Routes } from 'react-router-dom';
import { MoviesScreen } from '../components/movies/MoviesScreen';
import {NavBar} from '../components/UI/NavBar';
import { navigationLinks } from '../data/navigationLinks';

export const LoggedRouter = () => {
    return (
        <>
          <NavBar />

          <div className = "mt-28">
              <Routes>
                  {
                        navigationLinks.map(({to, Component, id}) => (
                            <Route key={id} path = {to} element = {<Component/>} />
                        ))
                  }
                  <Route path = 'movie/:movieId' element = {<MoviesScreen/>}  />
                  <Route path = '/' element = {<Navigate to={navigationLinks[0].to} replace />} />
              </Routes>
          </div>
        </>
    )
}
