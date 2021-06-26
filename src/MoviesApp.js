import React, { useEffect, useReducer } from 'react';
import { AppRouter } from './routers/AppRouter';
import {AuthContext} from './components/auth/AuthContext'
import { authReducer } from './components/auth/authReducer';


const init = ()=>{
    return JSON.parse(localStorage.getItem('user')) || {logged: false}
}

export const MoviesApp = () => {
   
    const [user, dispatch] = useReducer(authReducer, {}, init);

    useEffect(() => {
     localStorage.setItem('user', JSON.stringify(user));
    }, [user]);
    return (
        <AuthContext.Provider value = {{user, dispatch}}>
                <AppRouter />
        </AuthContext.Provider>    
    )
}
