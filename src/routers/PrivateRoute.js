import React, {useContext} from 'react';
import { Navigate, useLocation } from 'react-router-dom';
//import PropTypes from 'prop-types';
import { AuthContext } from '../components/auth/AuthContext';

export const PrivateRoute = ({children}) => {
    const { user } = useContext(AuthContext);
    const { pathname, search } = useLocation();
    
    localStorage.setItem('lastPath', pathname + search );
    
    return (!!user.logged)
        ? children
        : <Navigate to="/login" />
}
