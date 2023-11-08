import React from 'react'
import { useSelector } from 'react-redux';
import { Navigate, Route } from 'react-router-dom';

const PrivateRoute = ({ element: Component, ...rest }) => {
    const isAuthenticated = useSelector(state => state.login.token)

    return (
        <Route {...rest} element={isAuthenticated ? <Component {...rest} /> : <Navigate to={'/login'} />} />
    )
}

export default PrivateRoute
