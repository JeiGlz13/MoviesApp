import React, {useContext} from 'react';
import { Navigate } from 'react-router-dom';
//import PropTypes from 'prop-types';
import { AuthContext } from '../components/auth/AuthContext';

export const PublicRoute = ({children}) => {
    const { user } = useContext(AuthContext);

    return (!!user.logged)
        ? <Navigate to="/" />
        : children
}