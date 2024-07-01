import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

const PublicRoute = ({ children }) => {
    const token = useSelector(state => state.auth.token);

    return token ? <Navigate to="/user" /> : children;
};

export default PublicRoute;
