import React from 'react';
import { Route, Routes, BrowserRouter} from "react-router-dom";
import { LoginScreen } from '../components/login/LoginScreen';
import { LoggedRouter } from './LoggedRouter';
import {PrivateRoute} from './PrivateRoute';
import {PublicRoute} from './PublicRoute'


export const LogoutRouter = () => {

    return (
          <BrowserRouter>
            <Routes>
                <Route path="/login" element= {
                      <PublicRoute>
                          <LoginScreen />
                      </PublicRoute>
                }
            
                />
            
              <Route path="/*" element={
                      <PrivateRoute>
                          <LoggedRouter />
                      </PrivateRoute>
                }
              />
            </Routes>
          </BrowserRouter>
    )
}
