import React, { useEffect, useReducer } from 'react';
import {AuthContext} from './components/auth/AuthContext'
import { authReducer } from './components/auth/authReducer';
import { LogoutRouter } from './routers/LogoutRouter';


const init = ()=>{
    return JSON.parse(localStorage.getItem('user')) || {logged: false}
}

export const MoviesApp = () => {
   
    const [user, dispatch] = useReducer(authReducer, {}, init);

    useEffect(() => {
        if ( !user ) return;
        localStorage.setItem('user', JSON.stringify(user));
    }, [user]);
    return (
        <AuthContext.Provider value = {{user, dispatch}}>
            <LogoutRouter/>
        </AuthContext.Provider>    
    )
}
